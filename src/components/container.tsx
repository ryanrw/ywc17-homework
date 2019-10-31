import React from 'react'
import styled from '@emotion/styled'

import { browserQueryRule } from '../utils'

const ContainerMain = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  ${browserQueryRule.largePhone} {
    max-width: 540px;
  }

  ${browserQueryRule.tablet} {
    max-width: 720px;
  }

  ${browserQueryRule.largeTablet} {
    max-width: 960px;
  }

  ${browserQueryRule.laptop} {
    max-width: 1140px;
  }
`

export const Container: React.FC = props => {
  return <ContainerMain>{props.children}</ContainerMain>
}
