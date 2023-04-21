// Import important parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize the Tag model (table) by extending Sequelize's Model class
class Tag extends Model {}

// Set up fields and rules for the Tag model
Tag.init(
  {
    // Define the columns for the Tag model

    // id: An integer column that does not allow null values, is set as the primary key, and uses auto-increment.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // tag_name: A string column representing the name of the tag.
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export the Tag model for use in other parts of the application
module.exports = Tag;
