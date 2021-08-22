import path from 'path'
import fs from 'fs-extra'
import fm from 'front-matter'
import { Meta } from '@entities/index'

export const metafile = 'index.md'

const getMeta: (slug: string) => Promise<Meta> = async (slug: string) => {
  const SRC = path.resolve(
    `${process.cwd()}/public/images/photography/${slug}/index.md`
  )
  const data = (await fm(fs.readFileSync(SRC, 'utf8')).attributes) as Meta
  return {
    slug,
    label: data.label,
    labelEn: data.labelEn,
    date: data.date,
    src: `images/slides/${slug}.png`,
  } as Meta
}

export default async (slug: string) => {
  try {
    return await getMeta(slug)
  } catch (e) {
    console.error(e)
  }
}
