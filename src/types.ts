import { z } from 'zod'

export const AirtableProjectAssetSchema = z.object({
  filename: z.string(),
  height: z.number().optional(),
  id: z.string(),
  size: z.number(),
  thumbnails: z.object({ small: z.any(), large: z.any(), full: z.any() }).optional(),
  type: z.string(),
  url: z.string(),
  width: z.number().optional()
})

export type AirtableProjectAsset = z.infer<typeof AirtableProjectAssetSchema>

export const AirtableProjectSchema = z.object({
  Description: z.string(),
  Name: z.string(),
  Plurality: z.string(),
  Status: z.string(),
  Synopsis: z.string(),
  Tech: z.string().array(),
  Type: z.string(),
  Github: z.string().optional(),
  Id: z.number(),
  Hosted: z.string().optional(),
  Assets: AirtableProjectAssetSchema.array().optional(),
  Downloadables: AirtableProjectAssetSchema.array().optional(),
  Endpoints: z.string().optional()
})

export type AirtableProject = z.infer<typeof AirtableProjectSchema>

export const AirtablePersonalDataSchema = z.object({
  Name: z.string(),
  Downloads: AirtableProjectAssetSchema.array().optional(),
  Info: z.string().optional()
})

export type AirtablePersonalData = z.infer<typeof AirtablePersonalDataSchema>

export type AirtableData = AirtableProject | AirtablePersonalData
