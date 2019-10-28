import React from "react";

class Timer extends React.Component {
  render() {
    const {seconds} = this.props;
    const timeUp = seconds === 0;
    return <div style={{border: timeUp ? '2px solid red' : ''}}className="timer-container">00:{this.props.seconds}</div>;
  }
}

export default Timer;
