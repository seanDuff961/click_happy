import React from 'react';
import Counter from './components/counter';
import Timer from './components/timer';
import MaxScore from './components/maxScore';
import Form from './components/form';
import LeaderBoard from './components/leaderBoard';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { store } from './store';

class App extends React.Component {
  state = {}

  componentDidMount () {
    this.setState({
      maxScore: window.localStorage.getItem('max-score') || 0
    });
  }

  onCountUpdate = (count) => {
    if(this.state.maxScore < count) {
      window.localStorage.setItem('max-score', count);

      this.setState({
        maxScore: count
      });
    }
  }

  render () {
    return (
      <>
      <div className='container'>
          <div className='signup-form-container'>
            <div className='signup-title'>
              <h3>Enter Your Name</h3>
              < Form />
            </div>
          </div>
          <div className='main-container'>
            <div className='title'>
              <h1 className = 'main-title'>Click Happy</h1>
              <h3>How many clicks can you click in 30 seconds?</h3>
            </div>
            <Counter onCountUpdate={this.onCountUpdate}/>
            <Timer />
          </div>
          <div className='right-container'>
            <div className='max-score-container'>
              <MaxScore />
            </div>
            <div className='leaderboard-container'>
              <LeaderBoard />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

