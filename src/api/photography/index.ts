import path from 'path'
import fs from 'fs-extra'

const SRC = path.resolve(`${process.cwd()}/public/images/photography/`)

const getPhotography = async () => {
  const files = await fs.readdir(SRC)
  const photography = []
  for (const f of files) {
    photography.push(`${SRC}/${f}`)
  }

  return photography
}

export const getPaths: () => Promise<string[]> = async () => {
  return await fs.readdir(SRC)
}

export default async () => {
  try {
    return await getPhotography()
  } catch (e) {
    console.error(e)
  }
}
