const Sequelize = require('sequelize');

module.exports = sequelize => {
  const User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    score: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  });

  return User;
}
