import * as React from 'react'
import { styled } from '@components/foundations'
import Banner from './banner'
import Introduction from './introduction'
import Photography from './photography'
import { BasicLayout } from '@components/layout'
import { NextSeo } from 'next-seo'

interface Props {
  photography: string[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.color.neutral['100']};
`

const HomeScreen = ({ photography }: Props) => {
  return (
    <>
      <NextSeo
        title="Sylvester Abeng"
        description="横浜、鎌倉が大好きな人。平日フロントエンド・UI/UX 周りやっていて、土曜日はたまに写真撮ったりします"
        openGraph={{
          title: 'Sylvester Abeng',
          description:
            '横浜、鎌倉が大好きな人。平日フロントエンド・UI/UX 周りやっていて、土曜日はたまに写真撮ったりします',
          images: [
            {
              url: 'https://sylvester-abeng.vercel.app/images/ogp.png',
              alt: 'Sylvester Abeng',
            },
          ],
          site_name: 'Sylvester Abeng',
        }}
      />
      <Container>
        <BasicLayout>
          <Banner />
          <Introduction />
        </BasicLayout>
        <Photography photography={photography} />
      </Container>
    </>
  )
}

export default HomeScreen
