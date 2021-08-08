import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route
            to="/auth"
            component={AuthRouter}
          >
            Home
          </Route>

          <Route
            to="/"
            exact
            component={JournalScreen}
          >
            Main Route
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
