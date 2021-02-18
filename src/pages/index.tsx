import React from 'react'
import { GetStaticProps } from 'next'
import HomeScreen from '../screen/home'

const Home = () => {
  return <HomeScreen />
}

export const getStaticProps: GetStaticProps = async context => {
  // const cultures = await getCultureWords()
  // const workSummary = await getWorks()
  // const clients = await getClient()
  return {
    props: {
      // cultures,
      // workSummary,
      // clients,
    },
  }
}

export default Home
