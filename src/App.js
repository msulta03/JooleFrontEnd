import React from 'react';
import './App.css';

import LoginForm from './componenets/login_signup/login';
import SignupForm from './componenets/login_signup/signup';
function App() {
  return (
    <div className="App">
     {/* <LoginForm></LoginForm> */}
     <SignupForm></SignupForm>
    </div>
  );
}

export default App;
