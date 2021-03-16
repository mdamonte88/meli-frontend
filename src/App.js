import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './containers/HomePage';

class App extends React.Component {

  render() {
    //console.log('apiResponse', this.state.apiResponse)

    return (
      <div className="App">
        <header className="App-header" style={{minHeight: '300px'}}>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <HomePage/>
      </div>
    );
  }

}

export default App;