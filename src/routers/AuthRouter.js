import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
  return (
      <>
        <Switch>

          <Route
            to="/auth/login"
            component={LoginScreen}
          >
            Home
          </Route>

          <Route
            to="/auth/register"
            exact
            component={RegisterScreen}
          >
            Main Route
          </Route>

          <Redirect to='/auth/login'></Redirect>

        </Switch>
      </>
  )
}
