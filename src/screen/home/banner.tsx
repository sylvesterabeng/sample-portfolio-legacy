import * as React from 'react'
import { media, styled, theme } from '@components/foundations'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { FunctionComponent, useEffect } from 'react'

interface CircleProps {
  timer: number
}

const Container = styled.div`
  display: flex;
  min-height: 320px;
  align-items: flex-start;
  border-radius: ${p => p.theme.shape.radius.rg};

  ${media.lg} {
    align-items: center;
  }
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.spacing(8)};

  ${media.md} {
    margin-top: ${p => p.theme.spacing(12)};
  }

  ${media.lg} {
    flex-direction: row;
    align-items: flex-end;
    margin-top: ${p => p.theme.spacing(14)};
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
    width: 240px;
    margin-bottom: ${p => p.theme.spacing(3)};
  }

  ${media.lg} {
    width: 360px;
    margin-bottom: 0;
  }
`

const Circle = styled(CircularProgressbar)`
  min-width: 40px;
  min-height: 40px;
  width: 40px;
  height: 40px;
  font-family: ${p => p.theme.font.family.brand};

  ${media.md} {
    min-width: 56px;
    min-height: 56px;
    width: 56px;
    height: 56px;
  }

  .CircularProgressbar-path {
    transition-timing-function: ${(p: CircleProps) =>
      p.timer === 0 ? 'ease' : 'linear'};
    animation-direction: alternate;
    font-size: 24px;
  }
`

const Line = styled.div`
  flex: 1;
  min-width: 16px;
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
  const [timer, setTimer] = React.useState(0)
  const [slide, setSlide] = React.useState(0)

  useEffect(() => {
    if (timer === 8) {
      setTimer(0)
      slide === data.length - 1 ? setSlide(0) : setSlide(slide + 1)
    }
    const intervalId = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timer])

  const data = [
    {
      id: '01',
      src: 'images/garden-house.png',
      desc: 'Garden House, Kamakura',
    },
    {
      id: '02',
      src: 'images/jomyoji.png',
      desc: 'Jomyoji, Kamakura',
    },
    {
      id: '03',
      src: 'images/bungakukan-2.png',
      desc: 'Kamakura Bungakukan, Kamakura',
    },
    {
      id: '04',
      src: 'images/fumotoppara.png',
      desc: 'Fumotoppara, Shizuoka',
    },
    {
      id: '05',
      src: 'images/sakura.png',
      desc: 'Minami Ota, Yokohama',
    },
  ]

  return (
    <Container>
      <Hero>
        <ImgWrap>
          <Img src={data[slide].src} alt={data[slide].desc} />
        </ImgWrap>
        <RightPane>
          <Name>
            <span>Sylvester </span>
            <span>Abeng</span>
          </Name>
          <SlideWrap>
            <Circle
              timer={timer}
              value={timer}
              maxValue={7}
              text={data[slide].id}
              strokeWidth={4}
              styles={buildStyles({
                pathTransitionDuration: 1,
                textColor: theme.color.neutral['400'],
                pathColor: theme.color.brand.primary,
                trailColor: 'transparent',
                strokeLinecap: 'butt',
              })}
            />
            <Line />
            <SlideTitle>{data[slide].desc}</SlideTitle>
          </SlideWrap>
        </RightPane>
      </Hero>
    </Container>
  )
}

export default Banner
