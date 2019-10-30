import React from 'react'
import styled from '@emotion/styled'

const BottomFooterMain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px 30px;
  background: #213a8f;
  font-weight: bold;

  div,
  a {
    font-size: 0.75rem;
    color: #fff;
    padding: 10px 40px;
    text-decoration: none;
  }
`

export const BottomFooter: React.FC = () => {
  return (
    <BottomFooterMain>
      <div>Copyright © 2003-2019</div>
      <a href='https://regist.ชิมช้อปใช้.com/Register/'>
        ลงทะเบียนเข้าร่วมมาตรการ
      </a>
      <a href='https://www2.ชิมช้อปใช้.com/howto-register'>
        ขั้นตอนการเข้าร่วมทั้งหมด
      </a>
      <a href='https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province'>
        รายชื่อร้านค้าที่เข้าร่วมรายการ
      </a>
    </BottomFooterMain>
  )
}
