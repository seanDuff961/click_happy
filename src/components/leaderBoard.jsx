import React from 'react';

//display top 5 highest names + scores from database

class LeaderBoard extends React.Component {
  state = {
    leader: ''
   }

  render() {
    return (
    <>
      <h3 className='leaderboard-title'>Leaderboard</h3>
        {this.state.leaders}
    </>
    );
  }
}

export default LeaderBoard;
