import * as React from 'react'
import { media, styled } from '@components/foundations'
import { SectionWithScroller } from '@components/layout'
import { Meta, SectionLabel } from '@entities/index'

interface Props {
  photography: Meta[]
}

const Img = styled.img`
  width: 75vw;
  height: 100%;
  max-width: 1024px;
  object-fit: cover;
  border-radius: ${p => p.theme.shape.radius.sm};
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

const Photography = ({ photography }: Props) => {
  const sectionLabel: SectionLabel = {
    simple: 'Photography',
    noun: '好き',
    verb: 'を撮る',
  }

  return (
    <SectionWithScroller sectionLabel={sectionLabel}>
      {photography.map(s => (
        <Slide key={s.labelEn} href={'photography/' + s.label}>
          <Img src={s.src} alt={s.labelEn} draggable="false" />
          <Label>{s.label}</Label>
        </Slide>
      ))}
    </SectionWithScroller>
  )
}

export default Photography
