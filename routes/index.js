// Dependencies
const router = require('express').Router();

// Require api/index.js
//Prefix all routes defined in the api directory with '/api'
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;