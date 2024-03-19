import React, { Component } from 'react';

export default class Counter extends Component {
  state = { count: 0 };

  constructor() {
    super();
    console.log('Counter constructor called');
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log('Counter.render() called');
    return (
      <>
        <div className='container'>
          <h1>State demo using class component</h1>
          <hr />
          <button
            onClick={this.decrementCount}
            className='btn btn-outline-primary'
          >
            Decrement
          </button>
          <h3>{this.state.count}</h3>
          <button
            onClick={this.incrementCount}
            className='btn btn-outline-primary'
          >
            Increment
          </button>
        </div>
      </>
    );
  }
}
