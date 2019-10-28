import React, { Component } from 'react';
//import image from '../assets/images/mouse.png'; // Tell Webpack this JS file uses this image
//return highest count from all counts in database

class MaxScore extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <>
        <h3 className='max-score-title'>High Score</h3>
        <div className='max-score-inner-container'>
        {this.state.count}
        </div>
      </>
    );
  }
}

export default MaxScore;
