import * as React from 'react'
import { media, styled, theme } from '@components/foundations'
import { Socials } from '@components/blocks'
import { FunctionComponent } from 'react'

interface NavProps {
  comingSoon: boolean
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${p => p.theme.color.neutral['100']};
  z-index: ${p => p.theme.elevation.BACKDROP};
`

const NavWrap = styled.div`
  margin-bottom: ${p => p.theme.spacing(10)};
`

const NavIndex = styled.span`
  font-size: ${p => p.theme.font.size.md};
  margin-top: ${p => p.theme.spacing(2)};
  margin-right: ${p => p.theme.spacing(2)};
`

const NavItem = styled.span``

const Strikethrough = styled.div`
  background-image: linear-gradient(
    transparent 45%,
    #777 45% 55%,
    transparent 55%
  );
  height: 4px;
`

const Nav = styled.div`
  font-size: ${p => p.theme.font.size.xxl};
  color: ${(p: NavProps) =>
    p.comingSoon ? theme.color.neutral['200'] : theme.color.neutral['500']};
  transition: color 300ms cubic-bezier(0.2, 0, 0, 1);
  font-family: ${p => p.theme.font.family.brand};
  cursor: ${(p: NavProps) => (p.comingSoon ? 'not-allowed' : 'pointer')};
  display: flex;

  ::after {
    content: 'Coming Soon';
    display: ${(p: NavProps) => (p.comingSoon ? 'block' : 'none')};
    margin-top: ${p => p.theme.spacing(2)};
    margin-left: ${p => p.theme.spacing(1)};
    font-size: ${p => p.theme.font.size.rg};
    align-self: center;
    color: ${p => p.theme.color.brand.primary};
  }

  :hover {
    color: ${(p: NavProps) => (p.comingSoon ? '' : theme.color.brand.primary)};
  }

  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
  ${NavItem} +  ${NavItem} {
    margin-left: ${p => p.theme.spacing(6)};
  }

  ${media.md} {
    font-size: ${p => p.theme.font.size.xxxxl};
  }
`

const Menu: FunctionComponent = () => {
  const navItems = ['Home', 'Photography', 'Designs', 'Blog']
  return (
    <Container>
      <NavWrap>
        {navItems.map((n, idx) => (
          <Nav key={idx} comingSoon={idx !== 0}>
            <NavIndex>{'0' + (idx + 1)}</NavIndex>
            <NavItem>{n}</NavItem>
          </Nav>
        ))}
      </NavWrap>
      <Socials />
    </Container>
  )
}

export default Menu
