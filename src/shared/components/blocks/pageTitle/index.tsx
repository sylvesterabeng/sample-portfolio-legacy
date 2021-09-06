import * as React from 'react'
import { media, styled } from '@components/foundations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export interface Level {
  label: string
  level: string
}

interface props {
  title: string
  sub?: string
  levels: Level[]
}

const Container = styled.div`
  margin-bottom: ${p => p.theme.spacing(3)};

  ${media.md} {
    margin-bottom: ${p => p.theme.spacing(5)};
  }
`

const Breadcrumb = styled.div`
  display: flex;
  margin-top: ${p => p.theme.spacing(1)};
  font-size: ${p => p.theme.font.size.sm};

  ${media.md} {
    font-size: ${p => p.theme.font.size.rg};
  }
`

const Sub = styled.div`
  height: 18px;
  font-size: ${p => p.theme.font.size.sm};
  color: ${p => p.theme.color.neutral['400']};

  ${media.md} {
    height: 20px;
    font-size: ${p => p.theme.font.size.rg};
  }
`

const Title = styled.h1`
  color: ${p => p.theme.color.neutral['500']};
  font-size: ${p => p.theme.font.size.lg};
  margin-bottom: ${p => p.theme.spacing(1)};

  ${media.md} {
    margin-bottom: ${p => p.theme.spacing(3)};
    font-size: ${p => p.theme.font.size.xxl};
  }
`

const Link = styled.a`
  text-decoration: none;
  color: ${p => p.theme.color.neutral['400']};
  font-family: ${p => p.theme.font.family.brand};

  ${media.md} {
    font-size: ${p => p.theme.font.size.md};
  }

  &:hover {
    color: ${p => p.theme.color.brand.primary};
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: ${p => p.theme.color.neutral['400']};
`

const Item = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: ${p => p.theme.spacing(0.5)};
  }

  ${media.md} {
    > * {
      margin-right: ${p => p.theme.spacing(1)};
    }
  }
`

const PageTitle = ({ levels, sub, title }: props) => {
  let path = ''
  return (
    <Container>
      <Sub>{sub}</Sub>
      <Title>{title}</Title>
      <Breadcrumb>
        {levels.map((l, idx) => {
          return (
            <Item key={idx}>
              <Link href={idx > 0 ? `${path}/${l.level}` : '/'}>{l.label}</Link>
              {idx !== levels.length - 1 && <Icon icon={faChevronRight} />}
            </Item>
          )
        })}
      </Breadcrumb>
    </Container>
  )
}

export default PageTitle
