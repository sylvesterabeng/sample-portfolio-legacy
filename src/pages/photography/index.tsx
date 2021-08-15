import * as React from 'react'
import { GetStaticProps } from 'next'
import { getPhotography } from '@api/index'
import { BasicLayout } from '@components/layout'

interface Props {
  photography: string[]
}

const PhotographyPage = ({ photography }: Props) => {
  return (
    <>
      <BasicLayout>
        {photography.map((p, idx) => {
          return <p key={idx}>{p}</p>
        })}
      </BasicLayout>
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
