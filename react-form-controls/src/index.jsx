import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: ''
    };
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('value of state:', this.state);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />
        </label>
        <button
          type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

const element = <NewsletterForm />;

ReactDOM.render(
  element,
  document.querySelector('#root')
);
