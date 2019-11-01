import React from 'react'
import styled from '@emotion/styled'

import { browserQueryRule } from '../utils/css'

const BottomFooterMain = styled.div`
  padding: 15px 0;
  background: #213a8f;
  font-weight: bold;

  ${browserQueryRule.tablet} {
    padding: 0;
  }

  .container {
    padding: 0 30px;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100%;

    div,
    a {
      font-size: 0.75rem;
      color: #fff;
      padding: 10px 40px;
      text-decoration: none;
      box-sizing: border-box;
    }

    ${browserQueryRule.largePhone} {
      grid-template-columns: repeat(3, 1fr);

      div {
        grid-column: 1 / span 2;
        padding: 10px;
      }

      a {
        grid-row: 2;
        padding: 10px;
      }
    }

    ${browserQueryRule.tablet} {
      grid-template-columns: repeat(4, 1fr);
      max-width: 720px;
      margin: 0 auto;

      div,
      a {
        padding: 10px;
        font-size: 0.875rem;
        grid-column: auto;
        grid-row: auto;
        width: 100%;
      }
    }

    ${browserQueryRule.largeTablet} {
      max-width: 960px;
    }

    ${browserQueryRule.laptop} {
      max-width: 1140px;
    }
  }
`

const BottomFooter: React.FC = () => {
  return (
    <BottomFooterMain>
      <div className='container'>
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
      </div>
    </BottomFooterMain>
  )
}

export default BottomFooter
