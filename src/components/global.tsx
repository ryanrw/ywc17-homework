import React from 'react'
import { css, Global } from '@emotion/core'

const globalStyle = css`
  @font-face {
    font-family: 'TATSanaSuksa';
    src: url(./fonts/TATSanaSuksa-Regular.woff2);
    font-weight: normal;
  }

  @font-face {
    font-family: 'TATSanaSuksa';
    src: url(./fonts/TATSanaChon-Bold.woff2);
    font-weight: bold;
  }

  html,
  body {
    margin: 0;
    font-size: 16px;
    font-family: 'TATSanaSuksa';
    color: #333333;
  }
`

export const GlobalStyle: React.FC = () => <Global styles={globalStyle} />
