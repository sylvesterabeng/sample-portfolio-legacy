import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import ScrollLock from 'react-scrolllock'
import Link from 'next/link'
import { styled } from '@components/foundations'
import { MenuScreen } from '@components/blocks'
import { ButtonWrapper } from '@components/elements'

const Container = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(6, 5)};
  z-index: ${p => p.theme.elevation.HEADER};
  mix-blend-mode: difference;
`

const Logo = styled.img`
  height: 24px;
`

const Menu = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${p => p.theme.color.neutral['100']};
`

const Index = () => {
  const [menuIsOpened, setMenuIsOpened] = React.useState(false)

  const handleMenuClick = () => {
    setMenuIsOpened(!menuIsOpened)
  }

  return (
    <>
      <Container>
        <ButtonWrapper>
          <Link href="/" passHref>
            <Logo src="/images/logo.png" alt="logo" />
          </Link>
        </ButtonWrapper>
        <ButtonWrapper>
          <Menu
            icon={menuIsOpened ? faTimes : faBars}
            onClick={handleMenuClick}
          />
        </ButtonWrapper>
      </Container>
      {menuIsOpened && <MenuScreen />}
      <ScrollLock isActive={menuIsOpened} />
    </>
  )
}

export default Index
