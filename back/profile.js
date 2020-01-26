//Based off from the following tutorial: https://dev.to/saulojoab/how-to-get-data-from-an-mysql-database-in-react-native-53a4
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

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

    //   console.log(results);
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      // res.send(results)
    });
  });

    function query(conn, sql, args) {
        return new Promise( ( resolve, reject ) => {
            conn.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );  
        })
    }

  //Retrieve activities (returns a list of activities)
  // custom method : returnBadgeFromProgress
  // Retrieve user information
  
  //Retrieve points
 async function getTotalPoints(accID) {
    let res = await query(connection, `call retrieve_points_acc(${accID})`)
    return res;
  }

  app.get('/', (req, res) => {
    let test1 = getTotalPoints(1);
    test1.then(result => res.send(result));
  })

  app.get('/hello', (req, res) => {
    res.send("hello")
  })

  app.listen(3000, () => {
      console.log("server running")
  });