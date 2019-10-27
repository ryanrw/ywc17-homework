// must define the index signature
import { BrowserSize, MediaQuery, BrowserQuery } from '../react-app-env'

export const browserSizes: BrowserSize = {
  laptop: 1024,
  tablet: 768,
  mobile: 320,
}

export const browserQueryRule = Object.keys(browserSizes).reduce((acc, cV) => {
  // create empty object
  const mediaQuery: MediaQuery = {}

  // get current size
  const currentSize = browserSizes[cV]

  // map current size with @media query string
  mediaQuery[cV] = `@media screen and (min-width: ${currentSize}px)`

  // return new accumurator
  return { ...acc, ...mediaQuery }
}, {}) as BrowserQuery
