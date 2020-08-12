import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from '../helpers'

import AppCotent from '../pages/AppContent'

export default () => (
  <Router history={history}>
    <Switch>
      <Route path='/' component={AppCotent} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
)
