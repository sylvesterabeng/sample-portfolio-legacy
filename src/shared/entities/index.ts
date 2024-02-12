export interface SectionLabel {
  simple: string
  noun: string
  verb: string
}

export interface PhotographySlide {
  name: string
  src: string
  label: string
}

export interface Photography extends Meta {
  resources: string[]
}

export interface Meta {
  slug: string
  label: string
  labelEn: string
  date: string
  src: string
}
