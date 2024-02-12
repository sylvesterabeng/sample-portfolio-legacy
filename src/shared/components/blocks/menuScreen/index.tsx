import * as React from 'react'
import { FunctionComponent } from 'react'
import { media, styled, theme } from '@components/foundations'
import { Socials } from '@components/blocks'
import { navItems } from '@data/index'
import Link from 'next/link'

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

const Nav = styled.span<{ comingSoon: boolean }>`
  font-size: ${p => p.theme.font.size.xxl};

  a {
    color: ${p =>
      p.comingSoon ? theme.color.neutral['200'] : theme.color.neutral['500']};
    text-decoration: none;
    cursor: ${p => (p.comingSoon ? 'not-allowed' : 'pointer')};
    transition: color 300ms cubic-bezier(0.2, 0, 0, 1);
    font-family: ${p => p.theme.font.family.brand};
    display: flex;

    :hover {
      color: ${p => (p.comingSoon ? '' : theme.color.brand.primary)};
    }

    ::after {
      content: '※Coming Soon';
      display: ${p => (p.comingSoon ? 'block' : 'none')};
      margin-top: ${p => p.theme.spacing(2)};
      margin-left: ${p => p.theme.spacing(1)};
      font-size: ${p => p.theme.font.size.rg};
      align-self: center;
      color: ${p => p.theme.color.brand.primary};
    }
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
          <Nav key={idx} comingSoon={!available}>
            <Link href={url} key={idx}>
              <a target={external ? '_blank' : '_self'}>
                <NavIndex>{idx}</NavIndex>
                <NavItem>{name}</NavItem>
              </a>
            </Link>
          </Nav>
        ))}
      </NavWrap>
      <Socials />
    </Container>
  )
}

export default Menu
