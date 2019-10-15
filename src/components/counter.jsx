import React, { Component } from 'react';
import image from '../mouse.png'; // Tell Webpack this JS file uses this image

class Counter extends Component {
  state = {
    count: 0
  };

  clicked () {
    const onUpdate = this.props.onCountUpdate;
    const count = this.state.count + 1;

    this.setState({
      count
    });

    onUpdate(count);
  }

  render() {
    return (
      <>
      {/* // <div className='counter-container'> */}
        <div className='counter'>
          {this.state.count}
        </div>
        <img
          onClick={this.clicked.bind(this)}
          src={image}
          alt='click-happy-mouse'
          className='mouse'/>
      {/* // </div> */}
      </>
    );
  }

}

export default Counter;
