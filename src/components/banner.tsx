import React from 'react'
import styled from '@emotion/styled'

import LeftColumn from '../static/TopBanner/banner-left.png'
import CenterColumn from '../static/TopBanner/banner-center.png'
import RightColumn from '../static/TopBanner/banner-right.png'
import CenterLog from '../static/TopBanner/banner.png'
import { ImageColumnProps } from '../react-app-env'

const BannerMain = styled.div`
  width: 100%;
  display: flex;
  height: 220px;
`

const ImageColumn = styled.div<ImageColumnProps>`
  flex: 0 0 calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => `
    background: url(${props.imageSrc}) no-repeat center;
    background-size: cover;
  `}

  img {
    width: 110px;
  }
`

export const Banner: React.FC = () => {
  return (
    <BannerMain>
      <ImageColumn imageSrc={LeftColumn} />
      <ImageColumn imageSrc={CenterColumn}>
        <img src={CenterLog} alt='banner' />
      </ImageColumn>
      <ImageColumn imageSrc={RightColumn} />
    </BannerMain>
  )
}
