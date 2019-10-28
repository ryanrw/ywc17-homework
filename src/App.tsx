import React from 'react'

import { Container, GlobalStyle, Navbar } from './components'
import { useData } from './utils'

const App: React.FC = () => {
  const data = useData()

  if (data) {
    return (
      <>
        <Navbar navbarItems={data.navbarItems} />
        <Container>Hello world!</Container>
        <GlobalStyle />
      </>
    )
  }

  return <div>loading...</div>
}

export default App
