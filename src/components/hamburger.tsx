import React from 'react'
import styled from '@emotion/styled'

import { HamburgerProps, NavbarMainProps } from '../react-app-env'

const HamburgerMain = styled.div<NavbarMainProps>`
  position: relative;
  width: 30px;
  height: 20px;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background: #333;
    position: absolute;
    left: 0;
    transition: all ease-in-out 250ms;

    :nth-of-type(1) {
      top: ${({ isOpen }) => (isOpen ? '10px' : '0')};
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(135deg)' : 'rotate(0deg)'};
    }

    :nth-of-type(2) {
      top: 10px;
      left: ${({ isOpen }) => (isOpen ? '-35px' : '0')};
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    :nth-of-type(3) {
      top: ${({ isOpen }) => (isOpen ? '10px' : '20px')};
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(-135deg)' : 'rotate(0deg)'};
    }
  }
`

export const Hamburger: React.FC<HamburgerProps> = ({ state }) => {
  return (
    <HamburgerMain
      isOpen={state.isOpen}
      onClick={() => state.setOpen(!state.isOpen)}
    >
      <span />
      <span />
      <span />
    </HamburgerMain>
  )
}
