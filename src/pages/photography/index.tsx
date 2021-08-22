import * as React from 'react'
import { GetStaticProps } from 'next'
import { getPhotographyList } from '@api/index'
import { BasicLayout } from '@components/layout'
import { media, styled } from '@components/foundations'
import { Meta } from '@entities/index'

interface Props {
  photography: Meta[]
}

const Container = styled.div`
  background: ${p => p.theme.color.neutral['100']};
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.spacing(15)};
`

const Slide = styled.a`
  cursor: pointer;
  position: relative;
  margin-bottom: ${p => p.theme.spacing(5)};
`

const Img = styled.img`
  object-fit: cover;
  border-radius: ${p => p.theme.shape.radius.sm};
`

const Label = styled.span`
  position: absolute;
  font-size: ${p => p.theme.font.size.sm};
  color: ${p => p.theme.color.neutral['500']};
  padding: ${p => p.theme.spacing(1, 3)};
  background: ${p => p.theme.color.white};
  font-family: ${p => p.theme.font.family.primary};
  bottom: ${p => p.theme.spacing(-2)};
  left: ${p => p.theme.spacing(-1.5)};

  ${media.md} {
    font-size: ${p => p.theme.font.size.rg};
  }

  ${media.lg} {
    font-size: ${p => p.theme.font.size.md};
  }
`

const PhotographyPage = ({ photography }: Props) => {
  return (
    <Container>
      <BasicLayout>
        <Contents>
          {photography.map(p => {
            return (
              <Slide href={`photography/${p.slug}`} key={p.slug}>
                <Img src={p.src} alt={p.labelEn} />
                <Label>{p.label}</Label>
              </Slide>
            )
          })}
        </Contents>
      </BasicLayout>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const photography = await getPhotographyList()
  return {
    props: {
      photography,
    },
  }
}

export default PhotographyPage
