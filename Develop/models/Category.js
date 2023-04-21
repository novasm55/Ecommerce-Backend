// Import the required modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the database connection configuration
const sequelize = require('../config/connection.js');

// Create a Category class extending Sequelize's Model class
class Category extends Model {}

// Initialize the Category model with its properties and options
Category.init(
  {
    // Define the columns for the Category model
    id: {
      type: DataTypes.INTEGER, // Set the data type to integer
      allowNull: false,        // Disallow null values
      primaryKey: true,        // Set this column as the primary key
      autoIncrement: true,     // Enable auto-increment for this column
    },
    category_name: {
      type: DataTypes.STRING, // Set the data type to string
      allowNull: false,       // Disallow null values
    },
  },
  {
    // Define the options for the Category model
    sequelize,               // Pass the imported sequelize instance
    timestamps: false,       // Disable automatic timestamp columns
    freezeTableName: true,   // Prevent Sequelize from pluralizing the table name
    underscored: true,       // Use underscores instead of camel-casing for field names
    modelName: 'category',   // Set the name of the model
  }
);

// Export the Category model for use in other parts of the application
module.exports = Category;
