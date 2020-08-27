import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './pages/Main';
import Users from './pages/Users';

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/users" exact>
        <Users />
      </Route>
    </Router>
  );
};

export default Routes;
