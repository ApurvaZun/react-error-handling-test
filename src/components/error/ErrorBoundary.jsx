import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    const { error, errorInfo } = this.state
    const { children } = this.props
    if (errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <Redirect
            to={{
              pathname: '/error',
              state: { errorMsg: error, errorStack: errorInfo }
            }}
          />
        </div>
      );
    }
    // Normally, just render children
    return children
  }  
}

export default withRouter(ErrorBoundary)
