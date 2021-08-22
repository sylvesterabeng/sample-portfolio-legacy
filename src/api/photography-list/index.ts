import path from 'path'
import fs from 'fs-extra'
import { getMeta } from '@api/index'
import { Meta } from '@entities/index'

const SRC = path.resolve(`${process.cwd()}/public/images/photography/`)

const getPhotographyList: () => Promise<Meta[]> = async () => {
  const files = await fs.readdir(SRC)
  const photography: Meta[] = []
  for (const f of files) {
    const meta = await getMeta(f)
    photography.push(meta)
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
