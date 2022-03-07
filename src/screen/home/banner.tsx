import * as React from 'react'
import { media, styled, theme } from '@components/foundations'
import { bannerSlides } from '@data/index'

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import { FunctionComponent, useEffect } from 'react'
// @ts-ignore
import { useTransition, animated, config, useTrail } from 'react-spring'

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

const Circle = styled(CircularProgressbarWithChildren)`
  min-width: 40px;
  min-height: 40px;
  width: 40px;
  height: 40px;
  font-family: ${p => p.theme.font.family.brand};
  display: flex;
  align-items: center;
  justify-content: center;

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

const CircleIndex = styled.span`
  cursor: pointer;
  user-select: none;
  font-size: ${p => p.theme.font.size.sm};
  color: ${p => p.theme.color.neutral['400']};

  ${media.md} {
    font-size: ${p => p.theme.font.size.rg};
  }
`

const AnimatedCircleIndex = animated(CircleIndex)

const Line = styled.div`
  min-width: 16px;
  width: 16px;
  margin: ${p => p.theme.spacing(0, 2)};
  border-top: 1px solid ${p => p.theme.color.neutral['400']};

  ${media.md} {
    flex: 1;
  }
`

const SlideTitleWrap = styled.div`
  position: relative;
`

const SlideTitle = styled.div`
  font-size: ${p => p.theme.font.size.rg};
  color: ${p => p.theme.color.neutral['400']};
  font-family: ${p => p.theme.font.family.brand};

  ${media.md} {
    font-size: ${p => p.theme.font.size.md};
  }
`

const AnimatedSlideTitle = animated(SlideTitle)

const ImgWrap = styled.div`
  position: relative;
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
  height: 50vmax;
  width: 100vw;
  user-select: none;
  object-fit: cover;
  min-height: 240px;
  pointer-events: none;
  border-radius: ${p => p.theme.shape.radius.sm};

  ${media.lg} {
    height: 80vmax;
  }
`

const AnimatedImg = animated(Img)

function NameTrail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 4000, friction: 400 },
    opacity: 1,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <Name {...props}>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.span
          key={index}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
          }}
        >
          {items[index]}
        </animated.span>
      ))}
    </Name>
  )
}

const Banner: FunctionComponent = () => {
  const maxTimer = 7
  const [timer, setTimer] = React.useState(0)
  const [slide, setSlide] = React.useState(0)

  const setNextSlide = () => {
    slide === bannerSlides.length - 1 ? setSlide(0) : setSlide(slide + 1)
  }

  useEffect(() => {
    if (timer === 8) {
      setTimer(0)
      setNextSlide()
    }
    const intervalId = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timer])

  const goToNextSlide = () => {
    setTimer(0)
    setNextSlide()
  }

  const transitions = useTransition(bannerSlides[slide], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' },
    config: config.slow,
  })

  return (
    <Container>
      <Hero>
        <ImgWrap>
          {transitions.map(({ item, props, key }) => (
            <AnimatedImg
              key={key}
              src={item.src}
              alt={item.desc}
              style={{ ...props }}
            />
          ))}
        </ImgWrap>
        <RightPane>
          <NameTrail open={true}>
            <span>Sylvester </span>
            <span>Abeng</span>
          </NameTrail>
          <SlideWrap>
            <Circle
              timer={timer}
              value={timer}
              maxValue={maxTimer}
              strokeWidth={4}
              styles={buildStyles({
                pathTransitionDuration: 1,
                pathColor: theme.color.brand.primary,
                trailColor: 'transparent',
              })}
            >
              {transitions.map(({ item, props, key }) => (
                <AnimatedCircleIndex
                  key={key}
                  style={{ ...props }}
                  onClick={goToNextSlide}
                >
                  {item.id}
                </AnimatedCircleIndex>
              ))}
            </Circle>
            <Line />
            <SlideTitleWrap>
              {transitions.map(({ item, props, key }) => (
                <AnimatedSlideTitle key={key} style={{ ...props }}>
                  {item.desc}
                </AnimatedSlideTitle>
              ))}
            </SlideTitleWrap>
          </SlideWrap>
        </RightPane>
      </Hero>
    </Container>
  )
}

export default Banner
