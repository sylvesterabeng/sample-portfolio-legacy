import * as React from 'react'
import { FunctionComponent } from 'react'
import { media, styled, theme } from '@components/foundations'
import { Socials } from '@components/blocks'
import { navItems } from '@data/index'

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

const Nav = styled.a`
  font-size: ${p => p.theme.font.size.xxl};
  color: ${(p: NavProps) =>
    p.comingSoon ? theme.color.neutral['200'] : theme.color.neutral['500']};
  transition: color 300ms cubic-bezier(0.2, 0, 0, 1);
  font-family: ${p => p.theme.font.family.brand};
  cursor: ${(p: NavProps) => (p.comingSoon ? 'not-allowed' : 'pointer')};
  display: flex;
  text-decoration: none;

  ::after {
    content: '※Coming Soon';
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

  ${NavItem} +  ${NavItem} {
    margin-left: ${p => p.theme.spacing(6)};
  }

  ${media.md} {
    font-size: ${p => p.theme.font.size.xxxxl};
  }
`

const Menu: FunctionComponent = () => {
  return (
    <Container>
      <NavWrap>
        {navItems.map(({ idx, name, available, url, external }) => (
          <Nav
            key={idx}
            comingSoon={!available}
            href={available ? url : 'javascript:void(0)'}
            target={external ? '_blank' : '_self'}
          >
            <NavIndex>{idx}</NavIndex>
            <NavItem>{name}</NavItem>
          </Nav>
        ))}
      </NavWrap>
      <Socials />
    </Container>
  )
}

export default Menu
