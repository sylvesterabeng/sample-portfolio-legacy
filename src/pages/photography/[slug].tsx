import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPhotographyResources } from '@api/index'
import { getPaths } from '@api/photography'
import { styled } from '@components/foundations'
import { BasicLayout } from '@components/layout'

interface Props {
  resources: string[]
  slug: string
}

const Container = styled.div`
  background: ${p => p.theme.color.neutral['100']};
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  width: 1280px;
  user-select: none;
  pointer-events: none;
  margin-bottom: ${p => p.theme.spacing(2)};
  border-radius: ${p => p.theme.shape.radius.sm};
`

const PhotographyPage = ({ resources, slug }: Props) => {
  return (
    <Container>
      <BasicLayout>
        <h1>{slug}</h1>
        <Images>
          {resources.map((r, idx) => {
            return <Img alt={r} src={r} key={idx} />
          })}
        </Images>
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
  const resources = await getPhotographyResources(slug as string)
  return {
    props: {
      resources,
      slug,
    },
  }
}

export default PhotographyPage
