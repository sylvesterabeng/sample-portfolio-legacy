import * as React from 'react'
import { media, styled } from '@components/foundations'
import { default as IndianaScroll } from 'react-indiana-drag-scroll'
import { FunctionComponent } from 'react'
import { BasicLayout } from '@components/layout'
import { SectionLabel } from '@entities/index'

interface Props {
  sectionLabel: SectionLabel
}

const Container = styled.div`
  width: 100vw;
  justify-content: center;
`

const ScrollContainer = styled(IndianaScroll)`
  overflow: auto !important;
`

const Label = styled.div`
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
  display: flex;
  width: max-content;
  padding: ${p => p.theme.spacing(3, 0)};

  ${media.md} {
    padding: ${p => p.theme.spacing(5, 0)};
  }
`

const ComingSoon = styled.span`
  color: ${p => p.theme.color.brand.primary};
  font-family: ${p => p.theme.font.family.brand};
  font-size: ${p => p.theme.font.size.sm};
  margin-left: ${p => p.theme.spacing(2)};

  ${media.md} {
    font-size: ${p => p.theme.font.size.rg};
  }
`

const SectionWithScroller: FunctionComponent<Props> = ({
  sectionLabel,
  children,
}) => {
  return (
    <Container>
      <BasicLayout>
        <div>
          <LabelSimple>{sectionLabel.simple}</LabelSimple>
          <ComingSoon>※Coming Soon</ComingSoon>
        </div>
        <Label>
          <LabelNoun>{sectionLabel.noun}</LabelNoun>
          <LabelVerb>{sectionLabel.verb}</LabelVerb>
        </Label>
      </BasicLayout>
      <ScrollContainer vertical={false}>
        <BasicLayout>
          <Scroller>{children}</Scroller>
        </BasicLayout>
      </ScrollContainer>
    </Container>
  )
}

export default SectionWithScroller
