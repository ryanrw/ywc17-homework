import React, { Component } from 'react'

interface ErrorProps {
  error: boolean
}

export class ErrorHandler extends Component<{}, ErrorProps> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: false,
    }
  }

  componentDidCatch(error: any) {
    this.setState({ error: !this.state.error })
  }

  render() {
    if (this.state.error) {
      return <div>400: CLient Error. Please try again later.</div>
    }

    return this.props.children
  }
}
