import React from 'react'
import { withRouter } from 'react-router-dom'

class ErrorBoundary extends React.Component {

  componentDidCatch(error) {
    const { history } = this.props
    history.push('error', { errorMsg: error })
  }

  render() {
    return (
      null
    )
  }
}

export default withRouter(ErrorBoundary)
