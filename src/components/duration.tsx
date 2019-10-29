import React from 'react'
import styled from '@emotion/styled'

import { DurationProps } from '../react-app-env'

const DurationMain = styled.div`
  text-align: center;
  margin-top: 35px;
  margin-bottom: 10px;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }
`

const Time = styled.p`
  font-size: 1.875rem;
  color: #e6332a;
  font-weight: bold;
  margin-top: -10px;
  margin-bottom: 0;
`

export const Duration: React.FC<DurationProps> = ({ duration }) => {
  return (
    <DurationMain>
      <h1>ตั้งแต่วันที่</h1>
      <Time>{duration}</Time>
    </DurationMain>
  )
}
