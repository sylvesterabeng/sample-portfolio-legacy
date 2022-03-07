import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPhotography } from '@api/index'
import { getPaths } from '@api/photography-list'
import { media, styled } from '@components/foundations'
import { BasicLayout } from '@components/layout'
import { Photography } from '@entities/index'
import { PageTitle } from '@components/blocks'
import { Level } from '@components/blocks/pageTitle'
import Home from '@pages/index'

interface Props {
  slug: string
  photography: Photography
}

const Container = styled.div`
  background: ${p => p.theme.color.neutral['100']};
`

const Contents = styled.div`
  padding-top: ${p => p.theme.spacing(10)};
  max-width: 1280px;
  margin: 0 auto;

  ${media.md} {
    padding-top: ${p => p.theme.spacing(15)};
  }
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  user-select: none;
  pointer-events: none;
  margin-bottom: ${p => p.theme.spacing(1)};
  border-radius: ${p => p.theme.shape.radius.sm};

  ${media.md} {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`

const PhotographyPage = ({ slug, photography }: Props) => {
  const levels: Level[] = [
    {
      label: 'Home',
      level: '',
    },
    {
      label: 'Photography',
      level: 'photography',
    },
    {
      label: photography.labelEn,
      level: slug,
    },
  ]

  return (
    <Container>
      <BasicLayout>
        <Contents>
          <PageTitle
            verb={photography.label}
            sub={photography.date}
            levels={levels}
          />
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
