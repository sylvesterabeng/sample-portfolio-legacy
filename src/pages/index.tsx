import React from 'react'
import { GetStaticProps } from 'next'
import HomeScreen from '../screen/home'
import { getPhotography } from '@api/index'

interface Props {
  photography: string[]
}

const Home = ({ photography }: Props) => {
  return <HomeScreen photography={photography} />
}

export const getStaticProps: GetStaticProps = async context => {
  const photography = await getPhotography()
  return {
    props: {
      photography,
    },
  }
}

export default Home
