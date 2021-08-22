import path from 'path'
import fs from 'fs-extra'

const SRC = path.resolve(`${process.cwd()}/public/images/photography/`)

const getPhotographyList = async () => {
  const files = await fs.readdir(SRC)
  const photography = []
  for (const f of files) {
    photography.push(`${f}`)
  }

  return photography
}

export const getPaths: () => Promise<string[]> = async () => {
  return await fs.readdir(SRC)
}

export default async () => {
  try {
    return await getPhotographyList()
  } catch (e) {
    console.error(e)
  }
}
