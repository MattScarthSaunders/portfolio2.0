import axios from 'axios'
import type { Ref } from 'vue'

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
