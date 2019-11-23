
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = require('./models/User')(sequelize);

module.exports = {
  sequelize,
  User
}
