import Airtable from 'airtable'
import type { AirtableProject } from './types'

export const getRecords = async (): Promise<AirtableProject[]> => {
  return new Promise((resolve, reject) => {
    const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_PAT }).base(
      'apppSwXbYj1F2aElq'
    )

    const recordsData: AirtableProject[] = []

    base('Projects')
      .select({
        view: 'Grid view'
      })
      .eachPage(
        function page(records, fetchNextPage) {
          recordsData.push(
            ...records.map((record) => ({ ...record.fields }) as unknown as AirtableProject)
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
