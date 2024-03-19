import { Component } from 'react'; // rcc --> snippet

export default class Footer extends Component {
  render() {
    let { year = 2024, companyName = 'KVinod Inc.' } = this.props;

    return (
      <div className='text-center'>
        &copy; {year} - All rights reserved by{' '}
        <a href='https://vinod.co'>{companyName}</a>
      </div>
    );
  }
}
