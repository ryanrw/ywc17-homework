import React from 'react'
import styled from '@emotion/styled'

import Logo from '../static/Footer/footer.png'

const TopFooterMain = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  padding: 44px 50px;
  background: #fafafa;

  > div {
    display: grid;
    grid-template-columns: 1fr;

    > div {
      width: 100%;
    }
  }

  h1 {
    font-weight: normal;
    font-size: 1rem;
    color: #e6332a;
    margin-top: 24px;
    margin-bottom: 0;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
  }

  .no-wrap {
    white-space: nowrap;
  }
`

// @todo #6 add tel link
export const TopFooter: React.FC = () => {
  return (
    <TopFooterMain>
      <img src={Logo} alt='logo' />
      <div>
        <div>
          <h1>ข้อมูลลงทะเบียนประชาชน</h1>
          <p>
            การรับสิทธิ การใช้งานแอปพลิเคชั่น{' '}
            <span className='no-wrap'>“เป๋าตัง”</span> และ{' '}
            <span className='no-wrap'>“ถุงเงิน”</span>
          </p>
          <p>ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144</p>
        </div>
        <div>
          <h1>ข้อมูลลงทะเบียนผู้ประกอบการ</h1>
          <p>เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</p>
          <p>ติดต่อ โทร.0 2270 6400 กด 7</p>
        </div>
        <div>
          <h1>ข้อมูลเที่ยวชิมช้อปใช้</h1>
          <p>ติดต่อ ททท.</p>
          <p>โทร 1672</p>
        </div>
      </div>
    </TopFooterMain>
  )
}
