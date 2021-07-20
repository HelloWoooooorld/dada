import React, { useState, useEffect, createContext, Suspense, lazy } from 'react'
import { Spin, Space } from 'antd'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import AdminPage from './pages/AdminPage'

import PrivateRoute from './components/Routing/PrivateRoute'
import PublicRoute from './components/Routing/PublicRoute'

const Login = lazy(() => import('./containers/Auth/components/Login'))
const Create = lazy(() => import('./containers/Auth/components/Forgot/components/Create/index'))
const Signup = lazy(() => import('./containers/Auth/components/SignUp/index'))
const Forgot = lazy(() => import('./containers/Auth/components/Forgot/index'))
const PageNotFound = lazy(() => import('./components/PageNotFound/index'))

function WaitingComponent(Component) {
  return (props) => (
    <Suspense
      fallback={
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 100 }}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={() => <Redirect exact to="/login/regular" />} />
        <PublicRoute exact path="/login/:step" component={WaitingComponent(Login)} />
        <PublicRoute exact path="/signup" component={WaitingComponent(Signup)} />
        <PublicRoute exact path="/forgot" component={WaitingComponent(Forgot)} />
        <PublicRoute exact path="/forgotpassword/:user" component={Create} />
        <PrivateRoute exact path="/admin" component={AdminPage} />
        <Route path="/*" component={WaitingComponent(PageNotFound)} />
      </Switch>
    </Router>
  )
}

export default App
