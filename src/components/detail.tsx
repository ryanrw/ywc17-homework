import React from 'react'
import styled from '@emotion/styled'

import { DetailProps } from '../react-app-env'

const DetailMain = styled.div`
  margin-bottom: 40px;

  h1 {
    color: #e6332a;
    font-size: 1.5rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .no-wrap {
    white-space: nowrap;
  }
`

export const Detail: React.FC<DetailProps> = ({ detail }) => {
  return (
    <DetailMain>
      <h1>
        มาตรการส่งเสริมการบริโภคในประเทศ{' '}
        <span className='no-wrap'>“ชิมช้อปใช้”</span>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: detail }} />
    </DetailMain>
  )
}
