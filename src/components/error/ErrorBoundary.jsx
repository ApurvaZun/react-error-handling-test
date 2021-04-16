import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

import ServerAPI from '../../utils/ServerAPI'
import { getDisplayTime } from '../../utils/time'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }

  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    })
    // You can also log error messages to an error reporting service here
    const creationTime = getDisplayTime(new Date())
    const postErrorMsg = new ServerAPI()
    postErrorMsg.reportError(error, errorInfo, creationTime)

  }

  render() {
    const { error, errorInfo } = this.state
    const { children } = this.props
    if (errorInfo) {
      // Error path
      return (
        <Router>
          <h2>Something went wrong.</h2>
          <Redirect
            from='bug'
            to={{
              pathname: '/error',
              state: { errorMsg: error, errorStack: errorInfo }
            }}
          />
        </Router>
      )
    }
    // Normally, just render children
    return children
  }
}

export default ErrorBoundary
