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
  Id: 8
  Hosted?: string
  Assets?: AirtableProjectAsset[]
}
