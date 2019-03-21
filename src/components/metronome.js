import React, { Component } from 'react';
import { CircleSlider } from 'react-circle-slider';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

  handleSliderChange = value => {
    this.setState({BPM: value});
  };

  render() {
    return (
      <div className="Metronome">
        <h2>Metronome</h2>
        <div className="BPM">
          <div style={{display: 'block'}}>
            <h3>BPM</h3>
            {this.state.BPM}
          </div>
          <div style={{display: 'block'}}>
            <span style={{cursor: 'pointer'}} onClick={() => this.decrementBPM()}>
              <FaChevronLeft />
            </span>
            <CircleSlider
              value={this.state.BPM}
              onChange={this.handleSliderChange}
              min={1}
              max={this.MAXBPM}
              knobRadius={10}
              progressWidth={10}
            />
            <span style={{cursor: 'pointer'}} onClick={() => this.incrementBPM()}>
              <FaChevronRight />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Metronome;
