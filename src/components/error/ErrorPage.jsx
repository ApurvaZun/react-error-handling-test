import React from 'react'
import { Container, Segment, Image } from 'semantic-ui-react'

import errorPage from '../../images/github_500.jpeg'

const ErrorPage = props => {
  const { errorMsg, errorStack } = props.location.state
  return (
    <Container>
      <Segment>
        <Image src={errorPage} size='large' centered style={{ padding: '20px' }} />
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {errorMsg && errorMsg.toString()}
          <br />
          {errorStack.componentStack}
        </details>
      </Segment>
    </Container>
  )
}

export default ErrorPage
