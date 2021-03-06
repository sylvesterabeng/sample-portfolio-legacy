import * as React from 'react'
import { media, styled } from '@components/foundations'
import { Socials } from '@components/blocks'
import { FunctionComponent } from 'react'

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

const NavItem = styled.span``

const Nav = styled.div`
  font-size: ${p => p.theme.font.size.xxl};
  color ${p => p.theme.color.neutral['500']};
  transition: color 300ms cubic-bezier(0.2, 0, 0, 1);
    
  :hover{
    color ${p => p.theme.color.brand.primary};
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
          <Nav key={idx}>
            <NavItem>{'0' + (idx + 1)}</NavItem>
            <NavItem>{n}</NavItem>
          </Nav>
        ))}
      </NavWrap>
      <Socials />
    </Container>
  )
}

export default Menu
