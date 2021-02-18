import * as React from 'react'
import { styled } from '@components/foundations'

const Container = styled.div`
  height: 80vh;
  display: flex;
  min-height: 320px;
  position: relative;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  margin-top: ${p => p.theme.spacing(13)};
  padding: ${p => p.theme.spacing(0, 5)};
  border-radius: ${p => p.theme.shape.radius.rg};
`

const Hero = styled.div`
  color: ${p => p.theme.color.white};
  z-index: ${p => p.theme.elevation.HERO};
  font-size: ${p => p.theme.font.size.hero};
  font-family: 'AmalfiCoast', sans-serif;
`

const Img = styled.img`
  top: 0;
  max-height: 80vh;
  width: 1280px;
  min-height: 320px;
  object-fit: cover;
  position: absolute;
  border-radius: ${p => p.theme.shape.radius.rg};
`

const Banner = () => {
  return (
    <Container>
      <Hero>sylvesterabeng</Hero>
      <Img src="images/banner.jpg" alt="banner" />
    </Container>
  )
}

export default Banner
