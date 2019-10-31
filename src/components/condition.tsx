import React from 'react'
import styled from '@emotion/styled'

import { ConditionProps } from '../react-app-env'
import { browserQueryRule } from '../utils'

const ConditionMain = styled.div`
  margin-bottom: 80px;

  h1 {
    font-size: 1rem;
  }

  ${browserQueryRule.tablet} {
    max-width: 83.3%;
  }
`

const Condition: React.FC<ConditionProps> = ({ condition }) => {
  return (
    <ConditionMain>
      <h1>เงื่อนไขการเข้าร่วมมาตรการ</h1>
      <div dangerouslySetInnerHTML={{ __html: condition }} />
    </ConditionMain>
  )
}

export default Condition
