import React, { Component } from 'react';
import './App.css';
import Metronome from './components/metronome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Metronome />
      </div>
    );
  }
}

export default App;
