import * as React from 'react'
import { media, styled } from '@components/foundations'
import { default as IndianaScroll } from 'react-indiana-drag-scroll'
import { FunctionComponent } from 'react'
import { BasicLayout } from '@components/layout'
import { SectionLabel } from '@entities/index'
import { basicPadding } from '@components/layout/basicLayout'
import Link from 'next/link'

interface Props {
  sectionLabel: SectionLabel
}

const Container = styled.div`
  width: 100vw;
  justify-content: center;
  padding-bottom: ${p => p.theme.spacing(5)};
`

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const ScrollContainer = styled(IndianaScroll)``

const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.font.size.lg};
  font-family: ${p => p.theme.font.family.primary};

  ${media.md} {
    font-size: ${p => p.theme.font.size.xl};
  }

  ${media.lg} {
    font-size: ${p => p.theme.font.size.xxl};
  }
`

const LabelSimple = styled.span`
  font-family: ${p => p.theme.font.family.brand};
  font-size: ${p => p.theme.font.size.rg};
  color: ${p => p.theme.color.neutral['500']};

  ${media.md} {
    font-size: ${p => p.theme.font.size.md};
  }
`

const LabelNoun = styled.span`
  font-weight: bold;
  color: ${p => p.theme.color.brand.primary};
`

const LabelVerb = styled.span`
  color: ${p => p.theme.color.neutral['500']};
`

const Scroller = styled.div`
  ${basicPadding} {
  }

  display: flex;
  width: max-content;
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};

  ${media.md} {
    padding-top: ${p => p.theme.spacing(5)};
    padding-bottom: ${p => p.theme.spacing(5)};
  }
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 64px;
  height: 2px;
  margin-left: ${p => p.theme.spacing(1.5)};
`

const Line = styled.div`
  width: 100%;
  height: 4px;
  border-bottom: 1px solid ${p => p.theme.color.neutral['300']};
`

const Line2 = styled.div`
  width: 8px;
  position: absolute;
  right: 0;
  transform: rotate(25deg);
  transform-origin: right;
  height: 4px;
  border-bottom: 1px solid ${p => p.theme.color.neutral['300']};
`

const More = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${p => p.theme.font.size.sm};
  margin-bottom: ${p => p.theme.spacing(1)};

  &:hover {
    color: ${p => p.theme.color.brand.primary};
  }
`

const SectionWithScroller: FunctionComponent<Props> = ({
  sectionLabel,
  children,
}) => {
  return (
    <Container>
      <BasicLayout>
        <SectionWrapper>
          <div>
            <div>
              <LabelSimple>{sectionLabel.simple}</LabelSimple>
            </div>
            <Label>
              <LabelNoun>{sectionLabel.noun}</LabelNoun>
              <LabelVerb>{sectionLabel.verb}</LabelVerb>
            </Label>
          </div>
          <Link href={'/photography'}>
            <More>
              <div>See more</div>
              <Arrow>
                <Line />
                <Line2 />
              </Arrow>
            </More>
          </Link>
        </SectionWrapper>
      </BasicLayout>
      <ScrollContainer vertical={false}>
        <Scroller>{children}</Scroller>
      </ScrollContainer>
    </Container>
  )
}

export default SectionWithScroller
