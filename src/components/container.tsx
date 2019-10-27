import React from 'react'
import styled from '@emotion/styled'

import { browserQueryRule } from '../utils'

const ContainerMain = styled.div`
  ${browserQueryRule.mobile} {
    margin: 0 50px;
  }
`

export const Container: React.FC = props => {
  return <ContainerMain>{props.children}</ContainerMain>
}
