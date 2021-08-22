export interface SectionLabel {
  simple: String
  noun: String
  verb: String
}

export interface PhotographySlide {
  name: String
  src: String
  label: String
}

export interface Photography extends Meta {
  resources: String[]
}

export interface Meta {
  slug: String
  label: String
  labelEn: String
  date: String
  src: String
}
