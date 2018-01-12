import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loginWithGoogle from './helpers/auth';

const firebaseAuthKey = 'firebaseAuthInProgress';
// const appTokenKey = 'appToken';
require('./assets/style/index.scss');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // splashScreen: false,
    };

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }
  componentWillMount() {

  }

  handleGoogleLogin() {
    loginWithGoogle().catch((error) => {
      console.log(error);
      localStorage.removeItem(firebaseAuthKey);
    });
    localStorage.setItem(firebaseAuthKey, '1');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="button is-info" onClick={() => this.handleGoogleLogin()}>Login</button>
      </div>
    );
  }
}

export default App;
