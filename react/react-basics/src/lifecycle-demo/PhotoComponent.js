import React, { Component } from 'react';

export default class PhotoComponent extends Component {
  constructor() {
    super();
    console.log('PhotoComponent.constructor() called');
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount = () => {
    console.log('PhotoComponent.componentDidMount() called');
  };

  componentWillUnmount = () => {
    console.log('PhotoComponent.componentWillUnmount() called');
  };

  state = { width: 500 };

  increaseWidth = () => {
    this.setState({ ...this.state, width: this.state.width + 25 });
  };
  decreaseWidth = () => {
    this.setState({ ...this.state, width: this.state.width - 25 });
  };

  render = () => {
    console.log('PhotoComponent.render() called');

    return (
      <>
        <div>
          <button
            onClick={this.decreaseWidth}
            className='btn btn-link bi bi-dash-lg'
          ></button>
          {this.state.width}px
          <button
            onClick={this.increaseWidth}
            className='btn btn-link bi bi-plus-lg'
          ></button>
        </div>
        <img
          style={{ width: `${this.state.width}px` }}
          className='img-thumbnail'
          src={this.props.path}
          alt='fighter jet'
        />
      </>
    );
  };
}
