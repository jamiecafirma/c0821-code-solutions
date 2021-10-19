import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.message}</button>;
}

const element = <CustomButton message="Click Me!"/>;
ReactDOM.render(
  element,
  document.querySelector('#root')
);
