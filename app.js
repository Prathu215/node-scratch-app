// These are same like import statements for front end frameworks
const { json } = require('express');
const express = require('express');
const app = express();

/*Here we used one of the exisitng use() function which are available in 
express js and passing the req and res */
app.use((req, res, next) => {
  
res.status(200).json({
message: 'It works!'
  });
});

module.exports = app;