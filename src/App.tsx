import React from 'react'

import {
  Container,
  GlobalStyle,
  Navbar,
  Banner,
  Duration,
  Register,
  Detail,
  Condition,
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
        </Container>
        <Register />
        <Container>
          <Detail detail={data.detail} />
          <Condition condition={data.condition} />
        </Container>
        <GlobalStyle />
      </>
    )
  }

  return <div>loading...</div>
}

export default App
