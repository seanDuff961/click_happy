import React from "react";
import { connect } from "react-redux";
import Counter from "./components/counter";
import Timer from "./components/timer";
import MaxScore from "./components/maxScore";
import Form from "./components/form";
import LeaderBoard from "./components/leaderBoard";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUser, getUsers } from "./actions/userActions";
import { MAX_TIME } from "./utils";

const initialState = {
  seconds: MAX_TIME,
  count: 0,
  score: 0,
  formSubmitted: false,
  username: "",
  gameComplete: false
};

class App extends React.Component {
  state = initialState;

  componentDidMount() {
    this.props.getUsers();
  }

  submitForm = () => {
    this.setState({ formSubmitted: true });
  };

  clicked = () => {
    const {seconds, formSubmitted} = this.state;
    if (seconds > 0 && (formSubmitted || seconds < MAX_TIME)) {
      this.setState(
        prevState => ({ count: prevState.count + 1 }),
        () => {
          const { count } = this.state;
          this.onCountUpdate(count);
        }
      );
    }
  };

  onCountUpdate = (count) => {
    const { formSubmitted } = this.state;
    if (formSubmitted) {
      this.setState({ formSubmitted: false }, () => {
        const theInterval = setInterval(() => {
          const { seconds } = this.state;
          //if (seconds > 0 && seconds <= 10) {
          if (seconds > 0 && seconds <= MAX_TIME) {
            this.setState({
              seconds: seconds - 1
            });
          } else {
            const { username, score } = this.state;
            clearInterval(theInterval);
            this.setState({ gameComplete: true }, () => {
              this.props.createUser({ username, score });
            });
          }
        }, 1000);
      });
    }

    this.setState({ score: count });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetGame = () => {
    this.setState(initialState);
  };

  render() {
    const { seconds, formSubmitted, gameComplete, username, count } = this.state;
    const { users } = this.props;
    const maxScore = users[0] ? users[0].score : 0;
    return (
      <>
        <div className="container">
          <div className="signup-form-container">
            <div className="signup-title">
              <h3>Enter Your Name</h3>
              <Form
                username={username}
                handleInputChange={this.handleInputChange}
                submitForm={this.submitForm}
              />
            </div>
          </div>
          <div className="main-container">
            <div className="title">
              <h1 className="main-title">Click Happy</h1>
              <h3>How many times can you click on the mouse in 10 seconds?</h3>
            </div>
            <Counter
              formSubmitted={formSubmitted}
              seconds={seconds}
              onCountUpdate={this.onCountUpdate}
              clicked={this.clicked}
              count={count}
            />
            <Timer seconds={seconds} />
          </div>
          <div className="right-container">
            <div className="max-score-container">
              <MaxScore maxScore={maxScore} />
            </div>
            <div className="leaderboard-container">
              <LeaderBoard leaders={users} />
            </div>
            {gameComplete && (
              <div className="reset-container">
                <button onClick={this.resetGame} className="reset-button">
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.user.users
      .sort((a, b) => (a.score > b.score ? -1 : 1))
      .slice(0, 4)
  };
};

const mapDispatchToProps = {
  createUser,
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
