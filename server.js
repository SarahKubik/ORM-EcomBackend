// Dependencies
const express = require('express');
// Routes
const routes = require('./routes');
// Import sequelize connection
const sequelize =require('./config/connection');

// Basic express server and port setup
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to accept POST requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync method connects database/models and returns a promise the ".then promise."models to the database, then turn on the server to work with the data/run queries.

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
