import React from 'react'
import styled from '@emotion/styled'

import { browserQueryRule } from '../utils'

const RegisterMain = styled.div`
  position: relative;
`

const RegisLink = styled.a`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.125rem;
  text-decoration: none;

  div {
    background: #213a8f;
    padding: 10px;
    border-radius: 5px;
    line-height: 1.5;
    box-shadow: 0 25px 30px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin: 0 30px 50px;
    transition: background-color 0s ease-in-out, box-shadow 0s ease-in-out;

    :hover {
      box-shadow: none;
      background: #fcbb33;
    }
  }
`

const StyleHr = styled.hr`
  display: none;

  ${browserQueryRule.tablet} {
    display: block;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: -1;
  }
`

export const Register: React.FC = () => {
  return (
    <RegisterMain>
      <RegisLink href='https://www.xn--b3caa1e2a7e2b0h2be.com/close.html'>
        <div>
          คงเหลือสิทธิลงทะเบียน เฟส 2
          <br />
          {/* @todo #3 add time */}
          สำหรับวันที่
          <br />
          รอบเวลา 6.00 น. จำนวน 14,025 คน
          <br />
          รอบเวลา 18.00 น. จำนวน 14,024 คน
        </div>
      </RegisLink>
      <StyleHr />
    </RegisterMain>
  )
}
