import { lazy } from 'react'

import { ErrorHandler } from './error_handling'
import { Loader } from './loader'

const Container = lazy(() => import('./container'))
const GlobalStyle = lazy(() => import('./global'))
const Navbar = lazy(() => import('./navbar'))
const Banner = lazy(() => import('./banner'))
const Duration = lazy(() => import('./duration'))
const Register = lazy(() => import('./register'))
const Detail = lazy(() => import('./detail'))
const Condition = lazy(() => import('./condition'))
const BottomBanner = lazy(() => import('./bottom_banner'))
const BottomLogos = lazy(() => import('./bottom_logos'))
const TopFooter = lazy(() => import('./top_footer'))
const BottomFooter = lazy(() => import('./bottom_footer'))

export {
  Container,
  GlobalStyle,
  Navbar,
  Banner,
  Duration,
  Register,
  Detail,
  Condition,
  BottomBanner,
  BottomLogos,
  TopFooter,
  BottomFooter,
  ErrorHandler,
  Loader,
}
