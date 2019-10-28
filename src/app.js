import React from "react";
import Counter from "./components/counter";
import Timer from "./components/timer";
import MaxScore from "./components/maxScore";
import Form from "./components/form";
import LeaderBoard from "./components/leaderBoard";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  state = {
    seconds: 10,
    maxScore: 0,
    formSubmitted: false
  };

  componentDidMount() {
    this.setState({
      maxScore: window.localStorage.getItem("max-score") || 0
    });
  }

  submitForm = () => {
    this.setState({ formSubmitted: true });
  };

  onCountUpdate = count => {
    const { formSubmitted } = this.state;
    if (formSubmitted) {
      console.log('formmmm', formSubmitted);
      this.setState({ formSubmitted: false }, () => {
        setInterval(() => {
          const { seconds } = this.state;
          if (seconds > 0 && seconds <= 10) {
            this.setState({
              seconds: seconds - 1
            });
          }
        }, 1000);
      });
    }

    if (this.state.maxScore < count) {
      window.localStorage.setItem("max-score", count);
      this.setState({
        maxScore: count
      });
    }
  };

  render() {
    const { seconds, formSubmitted } = this.state;
    return (
      <>
        <div className="container">
          <div className="signup-form-container">
            <div className="signup-title">
              <h3>Enter Your Name</h3>
              <Form submitForm={this.submitForm} />
            </div>
          </div>
          <div className="main-container">
            <div className="title">
              <h1 className="main-title">Click Happy</h1>
              <h3>How many times can you click on the mouse in 10 seconds?</h3>
            </div>
            <Counter formSubmitted={formSubmitted} seconds={seconds} onCountUpdate={this.onCountUpdate} />
            <Timer seconds={seconds} />
          </div>
          <div className="right-container">
            <div className="max-score-container">
              <MaxScore />
            </div>
            <div className="leaderboard-container">
              <LeaderBoard />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
