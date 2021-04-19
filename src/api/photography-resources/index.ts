import path from 'path'
import fs from 'fs-extra'

const SRC = path.resolve(`${process.cwd()}/public/images/photography/`)

const getResources = async (slug: string) => {
  const files = await fs.readdir(`${SRC}/${slug}`)
  const resources = []
  for (const f of files) {
    resources.push(`/images/photography/${slug}/${f}`)
  }

  return resources
}

export default async (slug: string) => {
  try {
    return await getResources(slug)
  } catch (e) {
    console.error(e)
  }
}
