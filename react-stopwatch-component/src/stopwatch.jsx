import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { isOn: false, timer: 0 };
  }

  toggleStopwatch() {
    if (!this.state.isOn) {
      this.setState({
        isOn: true,
        timer: this.state.timer
      });
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    } else {
      this.setState({
        isOn: false,
        timer: this.state.timer
      });
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      isOn: true,
      timer: this.state.timer + 1
    });
  }

  reset() {
    if (!this.state.isOn) {
      this.setState({
        isOn: false,
        timer: 0
      });
    }
  }

  render() {
    let icon;
    if (!this.state.isOn) {
      icon = <i className="fas fa-play"></i>;
    } else {
      icon = <i className="fas fa-pause"></i>;
    }
    return (
      <div className="row align-center flex-column">
        <div onClick={this.reset} className="row justify-center align-center stopwatch-face">
          <div>{this.state.timer}</div>
        </div>
        <div onClick={this.toggleStopwatch} className="mt-1rem">{icon}</div>
      </div>
    );
  }
}
