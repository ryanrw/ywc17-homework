import React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

const ldsFacebook = keyframes`
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
`

const LdsFacebook = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: #fbba32;
    animation: ${ldsFacebook} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

    :nth-of-type(1) {
      left: 6px;
      animation-delay: -0.24s;
    }

    :nth-of-type(2) {
      left: 26px;
      animation-delay: -0.12s;
    }

    :nth-of-type(3) {
      left: 45px;
      animation-delay: 0;
    }
  }
`

const LoaderMain = styled.div`
  margin: auto;
`

export const Loader: React.FC = () => {
  return (
    <LoaderMain>
      <LdsFacebook />
    </LoaderMain>
  )
}
