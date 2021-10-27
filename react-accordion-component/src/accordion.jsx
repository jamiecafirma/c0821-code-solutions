import React from 'react';

function TopicBody(props) {
  if (!props.display || props.topic !== props.currentTopic) {
    return null;
  } else {
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedBanner = event.target.closest('div');
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
      this.setState({ currentTopic: clickedBanner.id });
    } else {
      if (clickedBanner.id !== this.state.currentTopic) {
        this.setState({ currentTopic: clickedBanner.id });
      } else {
        this.setState({ isOpen: false });
      }
    }
  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic =>
      <li key={topic.id}>
        <div className='topic-header' id={topic.id} onClick={this.handleClick} >
          <h2>{topic.name}</h2>
        </div>
        <TopicBody display={this.state.isOpen} topic={topic.id} description={topic.description} currentTopic={this.state.currentTopic} />
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}
