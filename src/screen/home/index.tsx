import * as React from 'react'
import { styled } from '@components/foundations'
import { Header } from '@components/blocks'
import Banner from './banner'
import Introduction from './introduction'
import Photography from './photography'
import { FunctionComponent } from 'react'
import { BasicLayout } from '@components/layout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.color.neutral['100']};
`

const HomeScreen: FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <BasicLayout>
        <Banner />
        <Introduction />
      </BasicLayout>
      <Photography />
    </Container>
  )
}

export default HomeScreen
