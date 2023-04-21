// Import important parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the database connection from config.js
const sequelize = require('../config/connection');

// Initialize the ProductTag model (table) by extending Sequelize's Model class
class ProductTag extends Model {}

// Set up fields and rules for the ProductTag model
ProductTag.init(
  {
    // Define the columns for the ProductTag model

    // id: An integer column that does not allow null values, is set as the primary key, and uses auto-increment.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // product_id: An integer column that references the 'product' model's 'id'.
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    // tag_id: An integer column that references the 'tag' model's 'id'.
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Export the ProductTag model for use in other parts of the application
module.exports = ProductTag;
