import React, { Component } from 'react';
import './App.css';


import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Routing from './componenets/routing/routes';




class  App extends Component {

  componentDidMount() {
    console.log ('from app component: ')
    console.log(this.props)
  }
  render (){
    return (
      <Router>
        <Switch>
            <Routing></Routing>
        </Switch>
      </Router>
    );
  }

}

export default App;
