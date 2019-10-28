
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URI);

const User = require('./models/User')(sequelize);

module.exports = {
  sequelize,
  User
}
