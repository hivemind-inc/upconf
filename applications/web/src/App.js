import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="message">
          <h2>Welcome</h2>
          <h1>Firebase Hosting Setup Complete</h1>
          <p>You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go build something
            extraordinary!</p>
          <a target="_blank" href="https://firebase.google.com/docs/hosting/" rel="noopener noreferrer">Open Hosting
            Documentation</a>
        </div>
        <p id="load">Firebase SDK Loading&hellip;</p>
      </div>
    );
  }
}

export default App;
