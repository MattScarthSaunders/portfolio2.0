export interface AirtableProjectAsset {
  filename: string
  height: number
  id: string
  size: number
  thumbnails: { small: any; large: any; full: any }
  type: string
  url: string
  width: number
}

export interface AirtableProject {
  Description: string
  Name: string
  Plurality: string
  Status: string
  Synopsis: string
  Tech: string[]
  Type: string
  Github?: string
  Id: number
  Hosted?: string
  Assets?: AirtableProjectAsset[]
  Downloadables?: AirtableProjectAsset[]
}
