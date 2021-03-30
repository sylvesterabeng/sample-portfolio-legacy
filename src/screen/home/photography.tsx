import * as React from 'react'
import { media, styled } from '@components/foundations'
import { FunctionComponent } from 'react'
import { SectionWithScroller } from '@components/layout'
import { PhotographySlide, SectionLabel } from '@entities/index'

const ComingSoon = styled.span`
  color: ${p => p.theme.color.brand.primary};
  font-family: ${p => p.theme.font.family.brand};
  font-size: ${p => p.theme.font.size.sm};

  ${media.md} {
    font-size: ${p => p.theme.font.size.rg};
  }
`

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

  ${media.lg} {
    font-size: ${p => p.theme.font.size.md};
  }
`

const Slide = styled.div`
  display: flex;
  position: relative;
  margin-right: 8vw;
  justify-content: center;
  cursor: not-allowed;

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
      name: 'kamakura-photowalk',
      src: 'images/banner.png',
      label: '鎌倉フォトウォーク',
    },
    {
      name: 'jomyoji',
      src: 'images/jomyoji.png',
      label: '浄妙寺',
    },
    {
      name: 'kamakura-bungakukan',
      src: 'images/bungakukan.png',
      label: '鎌倉文学館',
    },
    {
      name: 'fumotoppara',
      src: 'images/fumotoppara.png',
      label: 'ふもとっぱら',
    },
    {
      name: 'kita-kamakura',
      src: 'images/kita-kamakura.png',
      label: '北鎌倉',
    },
    {
      name: 'family-photo',
      src: 'images/arciaga.png',
      label: 'ファミリーフォト',
    },
  ]

  return (
    <SectionWithScroller sectionLabel={sectionLabel}>
      {slides.map((s, idx) => (
        <Slide key={idx}>
          <ImgCover />
          <Img src={s.src} alt={s.name} draggable="false" />
          <Label>
            <ComingSoon>Coming Soon</ComingSoon>
            {s.label}
          </Label>
        </Slide>
      ))}
    </SectionWithScroller>
  )
}

export default Photography
