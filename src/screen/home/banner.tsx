import * as React from 'react'
import { styled, theme } from '@components/foundations'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const Container = styled.div`
  height: 100vh;
  display: flex;
  min-height: 320px;
  align-items: center;
  padding: ${p => p.theme.spacing(0, 8)};
  border-radius: ${p => p.theme.shape.radius.rg};
`

const Hero = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: ${p => p.theme.spacing(8)};
`

const RightPane = styled.div`
  margin-bottom: ${p => p.theme.spacing(8)};
  margin-right: ${p => p.theme.spacing(15)};
`

const Name = styled.div`
  line-height: 1.15;
  margin-bottom: ${p => p.theme.spacing(5)};
  font-size: ${p => p.theme.font.size.hero};
  color: ${p => p.theme.color.neutral['500']};
  font-family: ${p => p.theme.font.family.brand};
`

const SlideWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 360px;
`

const Circle = styled(CircularProgressbar)`
  width: 56px;
  height: 56px;
  font-family: ${p => p.theme.font.family.brand};
`

const Line = styled.div`
  flex: 1;
  min-width: 40px;
  margin: ${p => p.theme.spacing(0, 2)};
  border-top: 1px solid ${p => p.theme.color.neutral['400']};
`

const SlideTitle = styled.div`
  font-size: ${p => p.theme.font.size.md};
  color: ${p => p.theme.color.neutral['400']};
  font-family: ${p => p.theme.font.family.brand};
`

const ImgWrap = styled.div`
  margin-right: ${p => p.theme.spacing(8)};
`

const Img = styled.img`
  height: 80vh;
  min-height: 320px;
  object-fit: cover;
  border-radius: ${p => p.theme.shape.radius.sm};
`

const Banner = () => {
  return (
    <Container>
      <Hero>
        <ImgWrap>
          <Img src="images/banner.png" alt="banner" />
        </ImgWrap>
        <RightPane>
          <Name>
            Sylvester
            <br />
            Abeng
          </Name>
          <SlideWrap>
            <Circle
              value={66}
              text={'01'}
              strokeWidth={4}
              styles={buildStyles({
                textColor: theme.color.neutral['400'],
                pathColor: theme.color.brand.primary,
                trailColor: 'transparent',
                strokeLinecap: 'butt',
              })}
            />
            <Line />
            <SlideTitle>Garden House, Kamakura</SlideTitle>
          </SlideWrap>
        </RightPane>
      </Hero>
    </Container>
  )
}

export default Banner
