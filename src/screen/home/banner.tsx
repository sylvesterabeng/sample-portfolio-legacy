import * as React from 'react'
import { media, styled, theme } from '@components/foundations'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { FunctionComponent } from 'react'

const Container = styled.div`
  height: 100vh;
  display: flex;
  min-height: 320px;
  align-items: center;
  border-radius: ${p => p.theme.shape.radius.rg};
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.spacing(3)};

  ${media.lg} {
    flex-direction: row;
    align-items: flex-end;
    margin-top: ${p => p.theme.spacing(8)};
  }
`

const RightPane = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${media.lg} {
    flex-direction: column;
    margin-bottom: ${p => p.theme.spacing(8)};
    margin-right: ${p => p.theme.spacing(10)};
  }

  ${media.xl} {
    margin-right: ${p => p.theme.spacing(15)};
  }
`

const Name = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
  color: ${p => p.theme.color.neutral['500']};
  font-family: ${p => p.theme.font.family.brand};
  font-size: 18vw;

  ${media.md} {
    flex-direction: row;
    font-size: 12vw;

    span {
      white-space: pre;
    }
  }

  ${media.lg} {
    flex-direction: column;
    font-size: ${p => p.theme.font.size.heroLg};
    margin-bottom: ${p => p.theme.spacing(5)};

    span {
      white-space: initial;
    }
  }

  ${media.xl} {
    font-size: ${p => p.theme.font.size.heroXl};
  }
`

const SlideWrap = styled.div`
  display: flex;
  max-width: 240px;
  align-items: center;
  white-space: nowrap;
  margin-bottom: ${p => p.theme.spacing(2)};

  ${media.md} {
    max-width: 360px;
    margin-bottom: ${p => p.theme.spacing(3)};
  }

  ${media.lg} {
    margin-bottom: 0;
  }
`

const Circle = styled(CircularProgressbar)`
  width: 40px;
  height: 40px;
  font-family: ${p => p.theme.font.family.brand};

  ${media.md} {
    width: 56px;
    height: 56px;
  }
`

const Line = styled.div`
  flex: 1;
  min-width: 40px;
  margin: ${p => p.theme.spacing(0, 2)};
  border-top: 1px solid ${p => p.theme.color.neutral['400']};
`

const SlideTitle = styled.div`
  font-size: ${p => p.theme.font.size.rg};
  color: ${p => p.theme.color.neutral['400']};
  font-family: ${p => p.theme.font.family.brand};

  ${media.md} {
    font-size: ${p => p.theme.font.size.md};
  }
`

const ImgWrap = styled.div`
  margin-bottom: ${p => p.theme.spacing(2)};

  ${media.md} {
    margin-bottom: ${p => p.theme.spacing(5)};
  }

  ${media.lg} {
    margin-bottom: 0;
    margin-right: ${p => p.theme.spacing(8)};
  }
`

const Img = styled.img`
  min-height: 240px;
  height: 50vh;
  width: 100vw;
  object-fit: cover;
  border-radius: ${p => p.theme.shape.radius.sm};

  ${media.lg} {
    height: 80vh;
  }
`

const Banner: FunctionComponent = () => {
  return (
    <Container>
      <Hero>
        <ImgWrap>
          <Img src="images/banner.png" alt="banner" />
        </ImgWrap>
        <RightPane>
          <Name>
            <span>Sylvester </span>
            <span>Abeng</span>
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
