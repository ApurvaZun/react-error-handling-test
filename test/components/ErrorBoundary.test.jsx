import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Redirect } from 'react-router' // https://reacttraining.com/react-router/web/api/MemoryRouter

import OspinSidebar from 'components/main/OspinSidebar'
import ErrorBoundary from '../../src/components/error/ErrorBoundary'
import ServerAPI from '../../src/utils/ServerAPI'

function Bug({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('Bug')
  } else {
    return null
  }
}

const renderMain = () => (
  render(
    <MemoryRouter>
      <OspinSidebar />
      <ErrorBoundary>
        <Bug shouldThrow dispatch={jest.fn()} />
      </ErrorBoundary>
    </MemoryRouter>
  )
)
const SIDEBARITEMS = [
  'Devices',
  'Profile',
  'Notifications',
  'Changelog',
  'Logout',
]

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'), // use actual everything else
  Redirect: jest.fn(() => null),
}))

const spy = ServerAPI.prototype.reportError = jest.fn()

afterEach(() => {
  jest.clearAllMocks()
})

test('test a component with errorboundary with sidebar and redirect', async () => {
  // eslint-disable-next-line no-console
  const originalError = console.error
  // eslint-disable-next-line no-console
  console.error = jest.fn()

  const { getByRole, getByText } = renderMain()

  getByRole(/heading/i)

  SIDEBARITEMS.forEach(getByText)

  expect(spy).toHaveBeenCalled()

  // eslint-disable-next-line no-console
  console.error = originalError

})
