import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clickCount: 0 };
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    let buttonStyle;
    if (this.state.clickCount < 3) {
      buttonStyle = '';
    } else if (this.state.clickCount < 6) {
      buttonStyle = 'cold white-text';
    } else if (this.state.clickCount < 9) {
      buttonStyle = 'cool white-text';
    } else if (this.state.clickCount < 12) {
      buttonStyle = 'warm white-text';
    } else if (this.state.clickCount < 15) {
      buttonStyle = 'hot';
    } else if (this.state.clickCount < 18) {
      buttonStyle = 'boiling';
    } else {
      buttonStyle = 'ouch';
    }
    return (
      <button onClick={this.handleClick} className={buttonStyle}>
        Hot Button
      </button>
    );
  }
}
