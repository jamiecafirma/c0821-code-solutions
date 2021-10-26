import React from 'react';

function topicBody(props) {
  if (!props.display || props.topic !== props.currentTopic) {
    return (
    <div className='topic-body'>
      <p>{props.description}</p>
    </div>
    );
  }
}

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentTopic: '01'
    };
  }

  handleClick(event) {
    if (this.state.isOpen === false) {

      this.setState({ isOpen: true });
    }
  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic =>
      <li key={topic.id}>
        <div className='topic-header' onClick={this.handleClick} >
          <h2>{topic.name}</h2>
        </div>
        <topicBody display={this.state.isOpen} topic={topic.id} description={topic.description} currentTopic={this.state.currentTopic} />
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}
