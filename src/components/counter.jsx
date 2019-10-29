import React, { Component } from "react";
import image from "../assets/images/mouse.png"; // Tell Webpack this JS file uses this image

class Counter extends Component {
  render() {
    const { seconds, count, clicked } = this.props;
    const timeUp = seconds === 0;
    return (
      <>
        <div
          className="counter"
          style={{ border: timeUp ? "2px solid red" : "" }}
        >
          {count}
        </div>
        <img
          onClick={clicked}
          src={image}
          alt="click-happy-mouse"
          className="mouse"
        />
      </>
    );
  }
}

export default Counter;
