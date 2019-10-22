import React from 'react';
import './App.css';


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
