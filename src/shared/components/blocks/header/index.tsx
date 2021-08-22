import * as React from 'react'
import ScrollLock from 'react-scrolllock'
import Link from 'next/link'
import { media, styled } from '@components/foundations'
import { MenuScreen } from '@components/blocks'
import { FunctionComponent } from 'react'
import { basicPadding } from '@components/layout/basicLayout'

const Container = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: ${p => p.theme.elevation.HEADER};
  mix-blend-mode: difference;

  @media (min-width: 0px) {
    padding-top: ${p => p.theme.spacing(2)};
  }

  ${basicPadding}

  ${media.md} {
    padding-top: ${p => p.theme.spacing(4)};
  }

  ${media.lg} {
    padding-top: ${p => p.theme.spacing(6)};
  }

  ${media.xl} {
    padding-top: ${p => p.theme.spacing(6)};
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

const Logo = styled(Button)`
  height: 26px;
  width: 21px;
  background-image: url('/images/logo.svg');
`

const Menu = styled(Button)`
  height: 17px;
  width: 47px;
  background-image: url('/images/menu.svg');
`

const Close = styled(Button)`
  height: 18px;
  width: 45px;
  background-image: url('/images/close.svg');
`

const Header: FunctionComponent = () => {
  const [menuIsOpened, setMenuIsOpened] = React.useState(false)

  const handleMenuClick = () => {
    setMenuIsOpened(!menuIsOpened)
  }

  return (
    <>
      <Container>
        <Link href="/" passHref>
          <Logo />
        </Link>
        {menuIsOpened ? (
          <Close onClick={handleMenuClick} />
        ) : (
          <Menu onClick={handleMenuClick} />
        )}
      </Container>
      {menuIsOpened && <MenuScreen />}
      <ScrollLock isActive={menuIsOpened} />
    </>
  )
}

export default Header
