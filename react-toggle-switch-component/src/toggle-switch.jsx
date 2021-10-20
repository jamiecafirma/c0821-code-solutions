import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: false };
  }

  handleClick() {
    if (!this.state.isOn) {
      this.setState({ isOn: true });
    } else {
      this.setState({ isOn: false });
    }
  }

  render() {
    let text;
    let bgStyle;
    let switchStyle;
    if (this.state.isOn) {
      bgStyle = 'switch-bg switch-bg-on';
      switchStyle = 'switch switch-on';
      text = 'ON';
    } else {
      bgStyle = 'switch-bg switch-bg-off';
      switchStyle = 'switch switch-off';
      text = 'OFF';
    }
    return (
      <div className={'row align-center'}>
        <div onClick={this.handleClick} className={bgStyle}>
          <div className={switchStyle}>
          </div>
        </div>
        <p className={'ml-1rem font-size-2rem sans-serif'}>{text}</p>
      </div>
    );
  }
}
