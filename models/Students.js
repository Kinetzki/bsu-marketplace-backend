const Sequelize = require("sequelize");
const connection = require("../connection/database");

const Student = connection.define("students", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  email_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_email_batstate_u: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  profile_photo: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "no-profile.jpg",
  },
});

module.exports = Student;
