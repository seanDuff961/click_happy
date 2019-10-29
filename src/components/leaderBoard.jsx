import React from "react";

//display top 5 highest names + scores from database

class LeaderBoard extends React.Component {
  render() {
    const { leaders } = this.props;
    return (
      <>
        <h3 className="leaderboard-title">Leaderboard</h3>
        {leaders.map((leader, i) => (
          <div key={i}>
            {leader.username} - {leader.score}
          </div>
        ))}
      </>
    );
  }
}

export default LeaderBoard;
