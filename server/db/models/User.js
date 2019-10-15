const Sequelize = require('sequelize');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = User;
// user fields?
// just name

// we'll want a separate field for score, right?
// I'm not really sure how it works, but we'll just want to collect name and score
// name and score will be 'paired' with eachother....I think
// we can store score in user tables along with name, or we can store it a diff table
// okay I think same table is better. ok

