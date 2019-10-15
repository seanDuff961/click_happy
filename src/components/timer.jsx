import React from 'react';

class Timer extends React.Component {
  state = {
    seconds: 30
   }

   componentDidMount() {
     setInterval(() => {
       const seconds = this.state.seconds;
       if (seconds > 0) {
        this.setState({
          seconds: seconds - 1
        });
       } else {
         this.setState({
           seconds: 0
         });
       }
     }, 1000);
   }

  render() {
    return (
      <div className="timer-container">
        00:{this.state.seconds}
      </div>
    );
  }
}

export default Timer;
