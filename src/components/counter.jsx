import React, { Component } from "react";
import image from "../assets/images/mouse.png"; // Tell Webpack this JS file uses this image
//import Timer from "../components/timer";
class Counter extends Component {
  state = {
    count: 0
  };

  clicked = () => {
    const { onCountUpdate, seconds, formSubmitted } = this.props;
    if (seconds > 0 && (formSubmitted || seconds < 10)) {
      this.setState(prevState => ({ count: prevState.count + 1}), () => {
        onCountUpdate(seconds)
      });
    }
  };

  render() {
    const {seconds} = this.props;
    const timeUp = seconds === 0;
    return (
      <>
        <div className="counter" style={{border: timeUp ? '2px solid red' : ''}}>{this.state.count}</div>
        <img
          onClick={this.clicked}
          src={image}
          alt="click-happy-mouse"
          className="mouse"
        />
      </>
    );
  }
}

export default Counter;
