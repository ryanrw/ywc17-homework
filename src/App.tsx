import React, { Suspense } from 'react'

import {
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
} from './components'
import { useData } from './utils'

const App: React.FC = () => {
  const data = useData()

  if (data) {
    return (
      <>
        <ErrorHandler>
          <Suspense fallback={<Loader />}>
            <Navbar navbarItems={data.navbarItems} />
            <Banner />
            <Container>
              <Duration duration={data.duration} />
              <Register />
              <Detail detail={data.detail} />
              <Condition condition={data.condition} />
              <BottomBanner />
              <BottomLogos />
            </Container>
            <TopFooter />
            <BottomFooter />
            <GlobalStyle />
          </Suspense>
        </ErrorHandler>
      </>
    )
  }

  return <Loader />
}

export default App
