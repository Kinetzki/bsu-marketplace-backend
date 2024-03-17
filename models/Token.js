const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");
const Students = require("./Students");

const Tokens = sequelizeConnect.define(
  "tokens",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    expirationDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    student_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "tokens",
    timestamps: true,
  }
);

const VerificationCodes = sequelizeConnect.define(
  "VerificationCodes",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    student_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    verification_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ip_address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    is_available: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { Tokens, VerificationCodes };
