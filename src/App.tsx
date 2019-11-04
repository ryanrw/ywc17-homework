import React, { Suspense } from 'react'

import { sanitize } from './utils'

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
            </Container>
            <Register />
            <Container>
              <Detail detail={sanitize(data.detail)} />
              <Condition condition={sanitize(data.condition)} />
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
