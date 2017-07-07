/* jshint esversion:6, node:true */

const dotenv = require('dotenv').config(),
      user   = process.env.DB_UNAME,
      password = process.env.DB_PWD;

module.exports = {
  getDbConnectionString : function() {
    return `mongodb://${user}:${password}@ds151062.mlab.com:51062/random_tasks`;
  }
}
