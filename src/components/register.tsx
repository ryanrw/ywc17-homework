import React from 'react'
import styled from '@emotion/styled'

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
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin-bottom: 50px;
    /* @todo #4 add transition */
  }
`

export const Register: React.FC = () => {
  return (
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
  )
}
