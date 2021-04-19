import * as React from 'react'
import { GetStaticProps } from 'next'
import { getPhotography } from '@api/index'

interface Props {
  photography: string[]
}

const PhotographyPage = ({ photography }: Props) => {
  return (
    <>
      <div>
        {photography.map((p, idx) => {
          return <p key={idx}>{p}</p>
        })}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const photography = await getPhotography()
  return {
    props: {
      photography,
    },
  }
}

export default PhotographyPage
