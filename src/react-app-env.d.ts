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

export interface NavbarItem {
  label: string
  href: string
}

export interface NavbarProps {
  navbarItems: NavbarItem[]
}

export interface Data {
  navbarItems: NavbarItem[]
  duration: string
  detail: string
  condition: string
}

export interface ImageColumnProps {
  imageSrc: string
}

interface NavbarMainProps {
  isOpen: boolean
}

export interface DurationProps {
  duration: string
}

export interface DetailProps {
  detail: string
}

export interface ConditionProps {
  condition: string
}
