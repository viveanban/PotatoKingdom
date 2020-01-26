//Based off from the following tutorial: https://dev.to/saulojoab/how-to-get-data-from-an-mysql-database-in-react-native-53a4
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createPool({
  host : 'potatokingdom.mysql.database.azure.com',
  user : 'bmaryam@potatokingdom.mysql.database.azure.com',
  password : 'Fedurosa2020',
  database : 'potatokingdom',
  port : 3306,
  ssl: {
    rejectUnauthorized: true
  }
});
// console.log(connection);

    // Connecting to the database.
    connection.getConnection(function (err, connection) {

// console.log("err" + err);
// console.log("conn" + connection);
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SHOW TABLES;', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      console.log(results);
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      // res.send(results)
    });
  });
