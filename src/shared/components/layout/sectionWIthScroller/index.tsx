import * as React from 'react'
import { styled } from '@components/foundations'
import ScrollContainer from 'react-indiana-drag-scroll'
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

const Label = styled.div`
  font-size: ${p => p.theme.font.size.xxl};
  font-family: ${p => p.theme.font.family.primary};
`

const LabelSimple = styled.div`
  font-family: ${p => p.theme.font.family.brand};
  font-size: ${p => p.theme.font.size.md};
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
  padding: ${p => p.theme.spacing(5, 0)};
`
const SectionWithScroller: FunctionComponent<Props> = ({
  sectionLabel,
  children,
}) => {
  return (
    <Container>
      <BasicLayout>
        <LabelSimple>{sectionLabel.simple}</LabelSimple>
        <Label>
          <LabelNoun>{sectionLabel.noun}</LabelNoun>
          <LabelVerb>{sectionLabel.verb}</LabelVerb>
        </Label>
      </BasicLayout>
      <ScrollContainer>
        <BasicLayout>
          <Scroller>{children}</Scroller>
        </BasicLayout>
      </ScrollContainer>
    </Container>
  )
}

export default SectionWithScroller
