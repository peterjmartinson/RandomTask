/**
 * Random Task : a To Do list manager
 *
 * 2017 © Peter Martinson
*/
/* jshint esversion:6, node:true */

// Setup
const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      morgan     = require('morgan'),

      db         = require('./src/controllers/db'),
      mongoose   = require('mongoose'),

      apiRoutes  = require('./src/controllers/api_routes'),

      port       = process.env.PORT || 3000;

// Configuration
app.use(express.static(__dirname + './src'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
app.use(/*route*/);

// Error Handler
app.use(function (err, req, res, next) {
  console.log('Error!\n', err.stack);
  res.status(500).send('something broke...');
});

// Database Connection
Mongoose.connect(db.getDbConnectionString());
mongoose.Promise = global.Promise;

// Start Server
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
