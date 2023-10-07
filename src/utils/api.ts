import axios from 'axios'
import type { Ref } from 'vue'
import Airtable from 'airtable'
import { AirtableProjectSchema, type AirtableData, type AirtablePersonalData } from '../types'

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

export const handleGenericApiRequest = async (
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
  isAPIFetching: Ref<boolean>,
  apiInfo: { [key: string]: any }
) => {
  const structuredUrl = urlStub.slice(0, urlStub.length - 4) + replaceParams(endpoint)
  const apiProperty = apiInfo[command + ' ' + endpoint]

  try {
    if (command === 'POST') {
      const exampleBody = apiProperty['example body']
      const res = await axios.post(structuredUrl, exampleBody)
      fetchedData.value = res.data
    }

    if (command === 'GET') {
      if (endpoint.includes(':') && !endpoint.includes('_id')) {
        const exampleResponse = apiProperty['example response']
        fetchedData.value = exampleResponse
      } else {
        const res = await axios.get(structuredUrl)
        fetchedData.value = res.data
      }
    }

    if (command === 'PATCH') {
      const exampleBody = apiProperty['example body']
      const res = await axios.patch(structuredUrl, exampleBody)
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

    if (command === 'POST') {
      fetchedData.value = {
        error:
          'Looks like someone has already done this today! This db gets reseeded daily, so try again tomorrow.'
      }
    } else {
      fetchedData.value = {
        error:
          'Apologies, something must have happened with the database! Try this request again and it will try to serve you up something different.'
      }
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

export const getPersonalData = async (): Promise<{
  CV: AirtablePersonalData
  Bio: AirtablePersonalData
}> => {
  const personalData = await getRecords('PersonalData')
  if (personalData) {
    const CV = personalData[0]
    const Bio = personalData[1]

    return { CV, Bio }
  } else {
    throw new Error('No Personal Data')
  }
}
