import * as React from 'react'
import { styled } from '@components/foundations'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const MenuWrapper = styled.button`
  border: none;
  outline: none;
  display: flex;
  background: none;
  padding: 0;
`

const Index = ({ children }: Props) => {
  return <MenuWrapper>{children}</MenuWrapper>
}

export default Index
