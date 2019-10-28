import React, { useState } from 'react'
import styled from '@emotion/styled'

import Logo from '../static/Footer/footer.png'
import { NavbarProps, NavbarMainProps } from '../react-app-env'

const NavbarMain = styled.div<NavbarMainProps>`
  background: #fff;
  ${({ isOpen }) => !isOpen && `box-shadow: 0 1px 1px hsla(0, 0%, 0%, 3%);`}

  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 35px;
    height: 48px;
  }
`

const MobileLink = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;

  a {
    text-decoration: none;

    color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;

    :focus {
      color: #000;
    }
  }
`

// @todo #1 add hamburger
export const Navbar: React.FC<NavbarProps> = ({ navbarItems }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <NavbarMain isOpen={isOpen}>
        <img src={Logo} alt='logo' />
        <div onClick={() => setOpen(!isOpen)}>bar</div>
      </NavbarMain>
      <MobileLink>
        {isOpen &&
          navbarItems.map(item => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
      </MobileLink>
    </>
  )
}
