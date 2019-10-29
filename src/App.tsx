import React from 'react'

import { Container, GlobalStyle, Navbar, Banner, Duration } from './components'
import { useData } from './utils'

const App: React.FC = () => {
  const data = useData()

  if (data) {
    return (
      <>
        <Navbar navbarItems={data.navbarItems} />
        <Banner />
        <Container>
          <Duration duration={data.duration} />
        </Container>
        <GlobalStyle />
      </>
    )
  }

  return <div>loading...</div>
}

export default App
