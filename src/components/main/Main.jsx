import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import OspinSidebar from 'components/main/OspinSidebar'
import Devices from 'components/devices/Devices'
import Changelog from 'components/changelog/Changelog'
import Profile from 'components/profile/Profile'
import Notifications from 'components/notifications/Notifications'
import BugFile from 'components/error/BugFile'
import ErrorBoundary from 'components/error/ErrorBoundary'
import ErrorPage from 'components/error/ErrorPage'

const Main = () => (
  <div>
    <BrowserRouter forceRefresh={false}>

      <OspinSidebar />

      <Container fluid className='main-content'>
        <Switch>
          <Route
            exact
            path='/devices'
            render={(props, history) => (
              <ErrorBoundary props={props} history={history}>
                <Devices />
              </ErrorBoundary>
            )}
          />

          <Route
            exact
            path='/profile'
            render={(props, history) => (
              <ErrorBoundary props={props} history={history}>
                <Profile />
              </ErrorBoundary>
            )}
          />

          <Route
            exact
            path='/notifications'
            render={(props, history) => (
              <ErrorBoundary props={props} history={history}>
                <Notifications />
              </ErrorBoundary>
            )}
          />
          
          <Route
            exact
            path='/changelog'
            render={(props, history) => (
              <ErrorBoundary props={props} history={history}>
                <Changelog />
              </ErrorBoundary>
            )}
          />

          <Route exact path='/error' component={ErrorPage} />

          <Route
            path='/bug'
            render={(props, history) => (
              <ErrorBoundary props={props} history={history} >
                <BugFile />
              </ErrorBoundary>
            )}
          />

          <Route
            path='/'
            render={(props, history) => (
              <ErrorBoundary props={props} history={history}>
                <Devices />
              </ErrorBoundary>
            )}
          />
          
        </Switch>
      </Container>

    </BrowserRouter>
  </div>
)

export default Main
