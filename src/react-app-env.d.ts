/// <reference types="react-scripts" />
export interface BrowserSize {
  [key: string]: number
  laptop: number
  tablet: number
  mobile: number
}

export interface MediaQuery {
  [key: string]: string
}

export interface BrowserQuery {
  laptop: string
  tablet: string
  mobile: number
}
