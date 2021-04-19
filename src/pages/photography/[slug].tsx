import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPhotographyResources } from '@api/index'
import { getPaths } from '@api/photography'

interface Props {
  resources: string[]
  slug: string
}

const PhotographyPage = ({ resources, slug }: Props) => {
  return (
    <>
      <h1>{slug}</h1>
      <div>
        {resources.map((r, idx) => {
          return <img alt={r} src={r} key={idx} width={'400px'} />
        })}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await getPaths()
  return {
    paths: paths.map(p => ({ params: { slug: p } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params
  const resources = await getPhotographyResources(slug as string)
  return {
    props: {
      resources,
      slug,
    },
  }
}

export default PhotographyPage
