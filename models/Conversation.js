const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const Conversation = sequelizeConnect.define(
  "conversation",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user1: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    user2: {
      type: Sequelize.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "conversation",
    timestamps: false,
  }
);

const Messages = sequelizeConnect.define(
  "messages",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    chat_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    student_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    message_content: {
      type: Sequelize.STRING(350),
      allowNull: false,
    },
  },
  {
    tableName: "messages",
    createdAt: true,
    updatedAt: false,
  }
);

module.exports = { Conversation, Messages };
