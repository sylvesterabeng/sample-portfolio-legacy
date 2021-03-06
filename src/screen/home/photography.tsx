import * as React from 'react'
import { media, styled } from '@components/foundations'
import { FunctionComponent } from 'react'
import { SectionWithScroller } from '@components/layout'
import { PhotographySlide, SectionLabel } from '@entities/index'

const Img = styled.img`
  width: 70vw;
  height: 100%;
`

const Label = styled.span`
  position: absolute;
  font-size: ${p => p.theme.font.size.sm};
  color: ${p => p.theme.color.neutral['500']};
  padding: ${p => p.theme.spacing(1, 3)};
  background: ${p => p.theme.color.white};
  font-family: ${p => p.theme.font.family.primary};

  ${media.md} {
    font-size: ${p => p.theme.font.size.md};
  }

  ${media.lg} {
    font-size: ${p => p.theme.font.size.lg};
  }
`

const Slide = styled.div`
  display: flex;
  position: relative;
  margin-right: 10vw;
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

  const slides: PhotographySlide[] = [
    {
      name: 'photography-slide',
      src: 'images/banner.png',
    },
    {
      name: 'photography-slide',
      src: 'images/banner.png',
    },
    {
      name: 'photography-slide',
      src: 'images/banner.png',
    },
    {
      name: 'photography-slide',
      src: 'images/banner.png',
    },
    {
      name: 'photography-slide',
      src: 'images/banner.png',
    },
    {
      name: 'photography-slide',
      src: 'images/banner.png',
    },
  ]

  return (
    <SectionWithScroller sectionLabel={sectionLabel}>
      {slides.map((s, idx) => (
        <Slide key={idx} onClick={() => console.log('clicked ' + idx)}>
          <Img
            src="images/banner.png"
            alt="photography-slide"
            draggable="false"
          />
          <Label>鎌倉フォトウォーク</Label>
        </Slide>
      ))}
    </SectionWithScroller>
  )
}

export default Photography
