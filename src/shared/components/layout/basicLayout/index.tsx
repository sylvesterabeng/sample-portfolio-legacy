import * as React from 'react'
import { css, media, styled } from '@components/foundations'
import { FunctionComponent } from 'react'

export const basicPadding = css`
  padding: ${p => p.theme.spacing(0, 3)};

  ${media.lg} {
    padding: ${p => p.theme.spacing(0, 5)};
  }

  ${media.xl} {
    padding: ${p => p.theme.spacing(0, 8)};
  }
`

const Container = styled.div`
  ${basicPadding}

  ${media.xl} {
    max-width: ${p => p.theme.dimension.contents};
    margin: 0 auto;
  }
`

const BasicLayout: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>
}

export default BasicLayout
