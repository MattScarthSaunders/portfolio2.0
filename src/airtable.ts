import Airtable from 'airtable'

export const getRecords = () => {
  const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_PAT }).base('apppSwXbYj1F2aElq')

  base('Projects')
    .select({
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          console.log('Retrieved', record.get('Name'))
        })

        fetchNextPage()
      },
      function done(err) {
        if (err) {
          console.error(err)
          return
        }
      }
    )
}
