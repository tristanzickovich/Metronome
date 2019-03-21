import React, { Component } from 'react';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.MAXBPM = 360;
    this.state = {
      BPM: 75
    }
  }

  modifyBPM(offset) {
    var currentBPM = this.state.BPM;
    var newBPM = currentBPM + offset;
    if(newBPM < 1){
      newBPM = 1;
    }
    else if(newBPM > this.MAXBPM){
      newBPM = this.MAXBPM;
    }
    this.setState({BPM: newBPM});
  }

  incrementBPM() {
    var offset = 1;
    this.modifyBPM(offset);
  }

  decrementBPM() {
    var offset = -1;
    this.modifyBPM(offset);
  }

  render() {
    return (
      <div className="Metronome">
        <h2>Metronome</h2>
        <div className="BPM">
          <h3>BPM</h3>
          <button onClick={() => this.decrementBPM()}>
            -
          </button>
          {this.state.BPM}
          <button onClick={() => this.incrementBPM()}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Metronome;
