import React from 'react'

import {
  Container,
  GlobalStyle,
  Navbar,
  Banner,
  Duration,
  Register,
} from './components'
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
          <Register />
        </Container>
        <GlobalStyle />
      </>
    )
  }

  return <div>loading...</div>
}

export default App
