import React from 'react'
import { GetStaticProps } from 'next'
import HomeScreen from '../screen/home'
import { getPhotographyList } from '@api/index'

interface Props {
  photography: string[]
}

const Home = ({ photography }: Props) => {
  return <HomeScreen photography={photography} />
}

export const getStaticProps: GetStaticProps = async context => {
  const photography = await getPhotographyList()
  return {
    props: {
      photography,
    },
  }
}

export default Home
