import axios from 'axios'
import type { Ref } from 'vue'
import Airtable from 'airtable'
import { AirtableProjectSchema, type AirtableData, AirtablePersonalDataSchema } from '../types'

export const replaceParams = (endpoint: string) => {
  if (endpoint.includes(':')) {
    const parts = endpoint.split('/')
    const alteredEndpoint = parts.map((part) => {
      if (part.includes(':')) {
        return String(Math.ceil(Math.random() * 10))
      } else {
        return part
      }
    })
    return alteredEndpoint.join('/')
  } else {
    return endpoint
  }
}

export const handleBoardgameRequests = async (
  command: string,
  endpoint: string,
  urlStub: string,
  fetchedData: Ref<
    | string
    | {
        [key: string]: any
      }
    | null
  >,
  isAPIFetching: Ref<boolean>
) => {
  try {
    if (command === 'GET') {
      let structuredEndpoint = ''
      if (endpoint.includes('username')) {
        structuredEndpoint = '/api/users'
        const url = urlStub.slice(0, urlStub.length - 4) + structuredEndpoint
        const res = await axios.get(url)
        fetchedData.value = res.data.users[Math.ceil((Math.random() * 10) / 2)]
      } else {
        structuredEndpoint = replaceParams(endpoint)
        const url = urlStub.slice(0, urlStub.length - 4) + structuredEndpoint
        const res = await axios.get(url)
        fetchedData.value = res.data
      }
    }
    if (command === 'POST') {
      let postbody = {}
      if (endpoint.includes('comments')) {
        postbody = {
          username: 'portfolioVisitor',
          body: 'This boardgame looks awesome! I cant wait to play again.'
        }
      } else {
        postbody = {
          owner: 'portfolioVisitor',
          title: 'A Site To Behold',
          review_body: 'I checked out Matts portfolio site and used his interactive API tool!',
          designer: 'Matt Scarth-Saunders',
          category: 'self-advertisement'
        }
      }
      const structuredEndpoint = replaceParams(endpoint)
      const url = urlStub.slice(0, urlStub.length - 4) + structuredEndpoint
      const res = await axios.post(url, postbody)
      fetchedData.value = res.data
    }
    if (command === 'PATCH') {
      const structuredEndpoint = replaceParams(endpoint)
      const url = urlStub.slice(0, urlStub.length - 4) + structuredEndpoint
      const res = await axios.patch(url, { inc_votes: 1 })
      fetchedData.value = res.data
    }
    if (command === 'DELETE') {
      fetchedData.value = {
        deleted: {
          comment_id: Math.ceil(Math.random() * 10)
        }
      }
    }
    isAPIFetching.value = false
  } catch (err) {
    isAPIFetching.value = false

    fetchedData.value = {
      error:
        'Apologies, something must have happened with the database! Try this request again and it will try to serve you up something different.'
    }
  }
}

export const handleDownloadFile = async (path: string) => {
  try {
    await axios.get(path)
    return true
  } catch (err) {
    if (err instanceof Error) return false
  }
}

export const getRecords = async (dbType: string): Promise<AirtableData[]> => {
  return new Promise((resolve, reject) => {
    const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_PAT }).base(
      dbType === 'PersonalData' ? 'appHIK7Nm2aUuRCS0' : 'apppSwXbYj1F2aElq'
    )

    const recordsData: AirtableData[] = []
    base(dbType)
      .select({
        view: 'Grid view'
      })
      .eachPage(
        function page(records, fetchNextPage) {
          recordsData.push(
            ...records.map((record) => ({ ...record.fields }) as unknown as AirtableData)
          )
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            resolve(recordsData)
          }
        }
      )
  })
}

export const getProjects = async () => {
  const projects = await getRecords('Projects')
  if (projects) {
    const validatedProjects = projects.map((proj) => AirtableProjectSchema.parse(proj))

    const FEProj = validatedProjects.filter((proj) => proj.Type === 'Frontend')
    const BEProj = validatedProjects.filter((proj) => proj.Type.includes('Backend'))
    return { FEProj, BEProj }
  } else {
    throw new Error('No projects')
  }
}

export const getPersonalData = async () => {
  const personalData = await getRecords('PersonalData')
  if (personalData) {
    const validatedPD = personalData.map((pd) => AirtablePersonalDataSchema.parse(pd))

    const CV = validatedPD[0]
    const Bio = validatedPD[1]

    return { CV, Bio }
  } else {
    throw new Error('No Personal Data')
  }
}
