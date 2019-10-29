import React, { Component } from 'react';
//import image from '../assets/images/mouse.png'; // Tell Webpack this JS file uses this image
//return highest count from all counts in database

class MaxScore extends Component {

  render() {
    const {maxScore} = this.props;
    return (
      <>
        <h3 className='max-score-title'>High Score</h3>
        <div className='max-score-inner-container'>
        {maxScore}
        </div>
      </>
    );
  }
}

export default MaxScore;
