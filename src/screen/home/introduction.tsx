import * as React from 'react'
import { media, styled } from '@components/foundations'
import { Socials } from '@components/blocks'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${p => p.theme.spacing(15, 0)};

  ${media.md} {
    padding: ${p => p.theme.spacing(50, 0)};
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${p => p.theme.spacing(3)};
`

const Text = styled.p`
  font-size: ${p => p.theme.font.size.rg};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(1)};
  }

  ${media.md} {
    font-size: ${p => p.theme.font.size.md};
  }
`

const Introduction = () => {
  return (
    <Container>
      <TextWrap>
        <Text>横浜、鎌倉が大好きな人。</Text>
        <Text>平日フロントエンド・UI/UX 周りやっていて、</Text>
        <Text>土曜日はたまに写真撮ったりします</Text>
      </TextWrap>
      <Socials />
    </Container>
  )
}

export default Introduction
