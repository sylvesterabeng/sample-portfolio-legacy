import * as React from 'react'
import { styled } from '@components/foundations'
import { FunctionComponent } from 'react'
import { SectionWithScroller } from '@components/layout'
import { PhotographySlide, SectionLabel } from '@entities/index'

const Slide = styled.div`
  display: flex;
  position: relative;
  margin-right: 10vw;
  justify-content: center;
`

const Img = styled.img`
  width: 70vw;
`

const Label = styled.span`
  top: -3%;
  right: 7%;
  position: absolute;
  font-size: ${p => p.theme.font.size.lg};
  color: ${p => p.theme.color.neutral['500']};
  padding: ${p => p.theme.spacing(1, 3)};
  background: ${p => p.theme.color.white};
  font-family: ${p => p.theme.font.family.primary};
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
  ]

  return (
    <SectionWithScroller sectionLabel={sectionLabel}>
      {slides.map((s, idx) => (
        <Slide key={idx}>
          {console.log(idx)}
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
