import React from 'react'
import styled from '@emotion/styled'

const ContainerMain = styled.div`
  margin: 0 20px;
`

export const Container: React.FC = props => {
  return <ContainerMain>{props.children}</ContainerMain>
}
