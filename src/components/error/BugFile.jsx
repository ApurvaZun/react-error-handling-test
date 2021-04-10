import React from 'react'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const BugFile = () => {
  const obj = { name: 'John' }
  return (
    <Container>
      {obj}
    </Container>
  )
}

export default withRouter(BugFile)
