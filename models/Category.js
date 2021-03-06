// Models are classes that defines a table.
const { Model, DataTypes } = require('sequelize');
// Connection object.
const sequelize = require('../config/connection.js');

// Create a new Sequelize model for Category.
class Category extends Model {}

// 'Init" methods Define fields/columns on model.
// An 'id' is automatically generated by Sequelize, best practice is to define primary key ourselves.
Category.init(
{
  // Setting up primary key
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // sets id
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},

//Link to database connection
  {
    sequelize,
    // Set to false to remove 'created_at' 'and updated_at" fields
    timestamps: true,
    // Sets plaurization forcing the table name to be equal to the model name.
    freezeTableName: true,
    underscored: true,
    // Naming convention: Model name will always be class name.
    modelName: 'category',
  }
);

// Exports class
module.exports = Category;