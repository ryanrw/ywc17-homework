import React from 'react'
import styled from '@emotion/styled'

import KTB from '../static/Banner/Banner_KTB_SQ.png'
import CGDCallCenter from '../static/Banner/Banner_CGD_Sq.png'
import TATHotline from '../static/Banner/Banner_TAT_Hotline_Sq.png'

const BottomBannerMain = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding: 0 15px;
  margin-bottom: 80px;

  img {
    width: 80%;
  }
`

export const BottomBanner: React.FC = () => {
  return (
    <BottomBannerMain>
      <img src={KTB} alt='คอลเซ็นเตอร์กรุงไทย KTB Call Center 021111144' />
      <img
        src={CGDCallCenter}
        alt='คอลเซ็นเตอร์กรมบัญชีกลาง CGD Call Center 022706400 กด 7'
      />
      <img src={TATHotline} alt='Tourist Hotline 1672' />
    </BottomBannerMain>
  )
}
