import React from 'react';
import './App.css';

import LoginForm from './componenets/login_signup/login';
import SignupForm from './componenets/login_signup/signup';
import Home from './componenets/login_signup/Home';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Routing from './componenets/routing/routes';

function App() {
  
  return (
    <Router>
      <Switch>
          <Routing></Routing>
      </Switch>

    </Router>
  );
}

export default App;
