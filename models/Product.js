const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const Product = sequelizeConnect.define("product", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  organization_id: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  stocks: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

const ProductVariation = sequelizeConnect.define("product_variation", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  product_id: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  var_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  var_image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  stocks: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  has_sub_var: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  is_available: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

const ProductSubVariation = sequelizeConnect.define("product_sub_var", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  product_var_id: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  sub_var_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sub_var_image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  stocks: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  is_available: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = { Product, ProductVariation, ProductSubVariation };
