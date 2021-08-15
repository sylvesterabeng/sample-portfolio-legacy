import * as React from 'react'
import { media, styled } from '@components/foundations'
import { FunctionComponent } from 'react'
import { SectionWithScroller } from '@components/layout'
import { SectionLabel } from '@entities/index'
import { photographySlides } from '@data/index'

const ImgCover = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.2;
  position: absolute;
  background-color: ${p => p.theme.color.black};
`

const Img = styled.img`
  width: 75vw;
  height: 100%;
  max-width: 1024px;
  object-fit: cover;
`

const Label = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  font-size: ${p => p.theme.font.size.sm};
  color: ${p => p.theme.color.neutral['500']};
  padding: ${p => p.theme.spacing(1, 3)};
  background: ${p => p.theme.color.white};
  font-family: ${p => p.theme.font.family.primary};

  ${media.md} {
    font-size: ${p => p.theme.font.size.rg};
  }

  ${media.lg} {
    font-size: ${p => p.theme.font.size.md};
  }
`

const Slide = styled.a`
  display: flex;
  position: relative;
  margin-right: 8vw;
  justify-content: center;
  cursor: pointer;

  :nth-child(4n + 1) {
    ${Label} {
      top: -16px;
      right: 7%;
      bottom: initial;
      left: initial;
    }
  }

  :nth-child(4n + 2) {
    ${Label} {
      top: initial;
      right: initial;
      bottom: -16px;
      left: 7%;
    }
  }

  :nth-child(4n + 3) {
    ${Label} {
      top: -16px;
      right: initial;
      bottom: initial;
      left: 7%;
    }
  }

  :nth-child(4n) {
    ${Label} {
      top: initial;
      right: 7%;
      bottom: -16px;
      left: initial;
    }
  }
`

const Photography: FunctionComponent = () => {
  const sectionLabel: SectionLabel = {
    simple: 'Photography',
    noun: '好き',
    verb: 'を撮る',
  }

  return (
    <SectionWithScroller sectionLabel={sectionLabel}>
      {photographySlides.map((s, idx) => (
        <Slide key={idx} href={'photography/' + s.name}>
          <ImgCover />
          <Img src={s.src} alt={s.name} draggable="false" />
          <Label>{s.label}</Label>
        </Slide>
      ))}
    </SectionWithScroller>
  )
}

export default Photography
