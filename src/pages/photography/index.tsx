import * as React from 'react'
import { GetStaticProps } from 'next'
import { getPhotographyList } from '@api/index'
import { BasicLayout } from '@components/layout'
import { media, styled } from '@components/foundations'
import { Meta } from '@entities/index'
import { Level } from '@components/blocks/pageTitle'
import { PageTitle } from '@components/blocks'
import Link from 'next/link'

interface Props {
  photography: Meta[]
}

const Container = styled.div`
  background: ${p => p.theme.color.neutral['100']};
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: ${p => p.theme.spacing(10)};

  ${media.md} {
    padding-top: ${p => p.theme.spacing(15)};
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Slide = styled.a`
  flex: 1;
  cursor: pointer;
  position: relative;
  margin-bottom: ${p => p.theme.spacing(5)};

  ${media.md} {
    margin-bottom: ${p => p.theme.spacing(8)};
  }
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
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
  const levels: Level[] = [
    {
      label: 'Home',
      level: '',
    },
    {
      label: 'Photography',
      level: 'photography',
    },
  ]
  return (
    <Container>
      <BasicLayout>
        <Contents>
          <PageTitle
            noun={'好き'}
            verb={'を撮る'}
            sub={'Photography'}
            levels={levels}
          />
          <Body>
            {photography.map(p => {
              return (
                <Link key={p.slug} href={`photography/${p.slug}`} passHref>
                  <Slide>
                    <Img src={p.src} alt={p.labelEn} />
                    <Label>{p.label}</Label>
                  </Slide>
                </Link>
              )
            })}
          </Body>
        </Contents>
      </BasicLayout>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const photography = await getPhotographyList()
  return {
    props: {
      photography,
    },
  }
}

export default PhotographyPage
