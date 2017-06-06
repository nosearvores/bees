// vendor
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {object} from 'prop-types';

// local
import {OfflinePlugin} from 'app/components';
import {DashboardInitial} from 'app/modules';

export const App = ({store, history}) => (
  <OfflinePlugin>
    <Provider store={store}>
      <Router history={history}>
        <div>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={DashboardInitial} />
        </div>
      </Router>
    </Provider>
  </OfflinePlugin>
);

App.propTypes = {
  store: object,
  history: object
};
