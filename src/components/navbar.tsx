import React, { useState } from 'react'
import styled from '@emotion/styled'

import Logo from '../static/Footer/footer.webp'
import { NavbarProps, NavbarMainProps } from '../react-app-env'
import { Hamburger } from './hamburger'
import { browserQueryRule } from '../utils'

const NavbarMain = styled.div<NavbarMainProps>`
  box-sizing: border-box;
  background: #fff;
  ${({ isOpen }) => !isOpen && `box-shadow: 0 1px 1px hsla(0, 0%, 0%, 3%);`}
  padding: 10px 20px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 200;

  ${browserQueryRule.largePhone} {
    padding: 0 15px;
  }

  > img {
    width: 35px;
    height: 48px;

    ${browserQueryRule.largePhone} {
      display: none;
    }
  }

  .hamburg {
    ${browserQueryRule.largePhone} {
      display: none;
    }
  }

  .navbar-link {
    flex: 1 0 100%;
    overflow: hidden;
    ${({ isOpen }) => (isOpen ? `height: 150px;` : `height: 0px;`)}
    transition: height ease-in-out 350ms;

    ${browserQueryRule.largePhone} {
      height: auto;
    }

    ul {
      margin: 0;
      padding: 0;

      ${browserQueryRule.largePhone} {
        text-align: center;
        padding-top: 5px;
      }

      li {
        list-style: none;
        padding: 10px 0;
        text-align: right;

        ${browserQueryRule.largePhone} {
          padding: 14px 15px;
          display: inline-block;
        }

        a {
          color: rgba(0, 0, 0, 0.5);
          text-decoration: none;

          ${browserQueryRule.largePhone} {
            color: #000;
            font-size: 0.875rem;
            font-family: 'TATSanaChon';
          }

          :focus {
            color: #000;
          }
        }
      }
    }
  }
`

const Navbar: React.FC<NavbarProps> = ({ navbarItems }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <NavbarMain isOpen={isOpen}>
        {/* Logo */}
        <img src={Logo} alt='logo' />

        {/* Hamburger */}
        <div className='hamburg'>
          <Hamburger state={{ isOpen, setOpen }} />
        </div>

        {/* Navbar Item */}
        <div className='navbar-link'>
          <ul>
            {navbarItems.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </NavbarMain>
    </>
  )
}

export default Navbar
