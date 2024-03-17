const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const Organization = sequelizeConnect.define("organization", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  organization_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  department_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

const Department = sequelizeConnect.define("department", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  department_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { Organization, Department };
