import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPhotography } from '@api/index'
import { getPaths } from '@api/photography-list'
import { styled } from '@components/foundations'
import { BasicLayout } from '@components/layout'
import { Photography } from '@entities/index'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface Props {
  slug: string
  photography: Photography
}

const Container = styled.div`
  background: ${p => p.theme.color.neutral['100']};
`

const Header = styled.div`
  margin-bottom: ${p => p.theme.spacing(5)};
`

const Date = styled.span`
  color: ${p => p.theme.color.neutral['400']};
`

const Title = styled.h1`
  font-size: ${p => p.theme.font.size.xxl};
  color: ${p => p.theme.color.neutral['500']};
`

const Contents = styled.div`
  padding-top: ${p => p.theme.spacing(15)};
  max-width: 1280px;
  margin: 0 auto;
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  user-select: none;
  pointer-events: none;
  margin-bottom: ${p => p.theme.spacing(2)};
  border-radius: ${p => p.theme.shape.radius.sm};
`

const Breadcrumb = styled.div`
  margin-top: ${p => p.theme.spacing(3)};

  > *:not(:last-child) {
    margin-right: ${p => p.theme.spacing(1)};
  }
`

const Link = styled.a`
  text-decoration: none;
  color: ${p => p.theme.color.neutral['400']};
  font-family: ${p => p.theme.font.family.brand};
  font-size: ${p => p.theme.font.size.md};

  &:hover {
    color: ${p => p.theme.color.brand.primary};
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: ${p => p.theme.color.neutral['400']};
`

const PhotographyPage = ({ slug, photography }: Props) => {
  return (
    <Container>
      <BasicLayout>
        <Contents>
          <Header>
            <Date>{photography.date}</Date>
            <Title>{photography.label}</Title>
            <Breadcrumb>
              <Link href={'/'}>Home</Link>
              <Icon icon={faChevronRight} />
              <Link href={'/photography'}> Photography</Link>
              <Icon icon={faChevronRight} />
              <Link href={'/photography/' + slug}>{photography.labelEn}</Link>
            </Breadcrumb>
          </Header>
          <Images>
            {photography.resources.map((r, idx) => {
              return <Img alt={r} src={r} key={idx} />
            })}
          </Images>
        </Contents>
      </BasicLayout>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await getPaths()
  return {
    paths: paths.map(p => ({ params: { slug: p } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params
  const photography = await getPhotography(slug as string)
  return {
    props: {
      slug,
      photography,
    },
  }
}

export default PhotographyPage
