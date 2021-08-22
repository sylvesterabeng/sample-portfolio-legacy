import React from 'react'
import { GetStaticProps } from 'next'
import { getPhotographyList } from '@api/index'
import { Meta } from '@entities/index'
import HomeScreen from '../screen/home'

interface Props {
  photography: Meta[]
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
