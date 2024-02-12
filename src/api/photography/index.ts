import path from 'path'
import fs from 'fs-extra'
import { Photography } from '@entities/index'
import { metafile } from '@api/meta'
import { getMeta } from '@api/index'

const SRC = path.resolve(`${process.cwd()}/public/images/photography/`)

const getPhotography: (slug: string) => Promise<Photography> = async (
  slug: string
) => {
  const meta = await getMeta(slug)
  const files = await fs.readdir(`${SRC}/${slug}`)
  const resources = []
  for (const f of files) {
    if (f !== metafile) resources.push(`/images/photography/${slug}/${f}`)
  }
  const photography: Photography = {
    slug: slug,
    label: meta.label,
    labelEn: meta.labelEn,
    date: meta.date,
    src: meta.src,
    resources: resources,
  }

  return photography
}

export default async (slug: string) => {
  try {
    return await getPhotography(slug)
  } catch (e) {
    console.error(e)
  }
}
