import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    let message;
    if (this.state.isClicked) {
      message = 'Thanks!';
    } else {
      message = 'Click Me!';
    }
    return (
      <button onClick={this.handleClick}>
        {message}
      </button>
    );
  }
}

const element = <CustomButton />;

ReactDOM.render(
  element,
  document.querySelector('#root')
);
