import * as React from 'react'
import { styled } from '@components/foundations'
import { Header } from '@components/blocks'
import Banner from './banner'
import Introduction from './introduction'
import Photography from './photography'
import { FunctionComponent } from 'react'
import { BasicLayout } from '@components/layout'
import { NextSeo } from 'next-seo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.color.neutral['100']};
`

const HomeScreen: FunctionComponent = () => {
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
        <Photography />
      </Container>
    </>
  )
}

export default HomeScreen
