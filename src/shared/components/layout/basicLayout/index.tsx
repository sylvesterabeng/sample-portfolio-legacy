import * as React from 'react'
import { media, styled } from '@components/foundations'
import { FunctionComponent } from 'react'

const Container = styled.div`
  padding: ${p => p.theme.spacing(0, 3)};

  ${media.lg} {
    padding: ${p => p.theme.spacing(0, 5)};
  }

  ${media.xl} {
    padding: ${p => p.theme.spacing(0, 8)};
  }
`

const BasicLayout: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>
}

export default BasicLayout
