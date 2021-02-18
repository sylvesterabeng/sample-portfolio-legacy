import * as React from 'react'
import { styled } from '@components/foundations'
import { Header } from '@components/blocks'
import Banner from './banner'
import Introduction from './introduction'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.color.neutral['100']};
`

const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Introduction />
    </Container>
  )
}

export default HomeScreen
