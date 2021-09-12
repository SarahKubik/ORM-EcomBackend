// Sets up database connection.

// Dependenices
require('dotenv').config();
const Sequelize = require('sequelize');

//Create am connection objection, calling the constructor of the Sequelize library. Grabs connection data (DB, USER, PW) from the .env file which has been added to the gitinore.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize( 'ecommerce_db', process.env.DB_USER,process.env.DB_PW,{
   //Database location (object)
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: '3306',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// When the above runs it setups the connection. As well as checks the modules, classes, etc., in the code confirming all matches basically signing off that the code works. As well as makes updates when needed.


 // Export the Sequelize object to use again in the app. The connection file is the only time Sequelize is used. Once imported the connection object is used in the code.
module.exports = sequelize;
