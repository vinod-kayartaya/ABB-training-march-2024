import React, { Component } from 'react';
import PhotoComponent from './PhotoComponent';

const images = [
  'https://cdn.pixabay.com/photo/2012/10/26/01/34/aircraft-63028_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/11/27/00/58/aircraft-547105_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/11/20/20/12/helicopter-2966569_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/11/10/08/15/aircraft-1813731_1280.jpg',
];

const imgPath =
  'https://cdn.pixabay.com/photo/2012/10/26/01/34/aircraft-63028_1280.jpg';

export default class App extends Component {
  state = { isChecked: true, currentImageIndex: 0 };

  changeHandler = ({ target: { checked } }) => {
    this.setState({ ...this.state, isChecked: checked });
  };

  render() {
    setTimeout(() => {
      const newCurrentImageIndex =
        this.state.currentImageIndex === images.length - 1
          ? 0
          : this.state.currentImageIndex + 1;
      this.setState({ ...this.state, currentImageIndex: newCurrentImageIndex });
    }, 2000);
    return (
      <>
        <div className='alert alert-primary'>
          <div className='container'>
            <h1>Lifecycle methods demo</h1>
          </div>
        </div>
        <div className='container'>
          <div>
            <input
              checked={this.state.isChecked}
              onChange={this.changeHandler}
              type='checkbox'
              id='showHideCheck'
              className='form-check-input'
            />{' '}
            <label className='form-check-label' htmlFor='showHideCheck'>
              Show/hide
            </label>
          </div>

          {this.state.isChecked && (
            <PhotoComponent path={images[this.state.currentImageIndex]} />
          )}
        </div>
      </>
    );
  }
}
