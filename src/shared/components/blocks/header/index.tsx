import * as React from 'react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import ScrollLock from 'react-scrolllock'
import Link from 'next/link'
import { media, styled } from '@components/foundations'
import { MenuScreen } from '@components/blocks'

const Container = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(2, 3)};
  z-index: ${p => p.theme.elevation.HEADER};
  mix-blend-mode: difference;

  ${media.md} {
    padding: ${p => p.theme.spacing(4, 3)};
  }

  ${media.lg} {
    padding: ${p => p.theme.spacing(6, 5)};
  }

  ${media.xl} {
    padding: ${p => p.theme.spacing(6, 8)};
  }
`

const Button = styled.span`
  font-size: ${p => p.theme.font.size.md};
  color: ${p => p.theme.color.neutral['100']};
  font-family: ${p => p.theme.font.family.brand};
  cursor: pointer;

  ${media.md} {
    font-size: ${p => p.theme.font.size.lg};
  }
`

const Index = () => {
  const [menuIsOpened, setMenuIsOpened] = React.useState(false)

  const handleMenuClick = () => {
    setMenuIsOpened(!menuIsOpened)
  }

  return (
    <>
      <Container>
        <Link href="/" passHref>
          <Button>Sy</Button>
        </Link>
        <Button
          icon={menuIsOpened ? faTimes : faBars}
          onClick={handleMenuClick}
        >
          Menu
        </Button>
      </Container>
      {menuIsOpened && <MenuScreen />}
      <ScrollLock isActive={menuIsOpened} />
    </>
  )
}

export default Index
