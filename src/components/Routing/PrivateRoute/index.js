/* eslint-disable no-shadow */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute(props) {
  // eslint-disable-next-line react/prop-types
  const { component: Component, authorized, ...rest } = props

  if (!authorized) {
    return <Redirect exact to="/login/:step" />
  }

  return (
    <>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </>
  )
}

export default PrivateRoute
