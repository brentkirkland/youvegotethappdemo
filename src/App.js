import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import IntroBar from './components/IntroBar'
import SendEntry from './components/SendEntry'
import How from './components/How'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <IntroBar/>
        <SendEntry/>
        <How/>
      </div>
    );
  }
}

export default App;
