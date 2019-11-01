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

  @font-face {
    font-family: 'TATSanaChon';
    src: url(./fonts/TATSanaChon-Regular.woff2);
  }

  html {
    font-size: 16px;
    font-family: 'TATSanaSuksa';
  }

  body {
    margin: 0;
    color: #333333;
  }
`

const GlobalStyle: React.FC = () => <Global styles={globalStyle} />

export default GlobalStyle
