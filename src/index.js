import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Car extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Car name="Toyota"/>,
  document.getElementById('test')
)
