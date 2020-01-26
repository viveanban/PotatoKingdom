//Based off from the following tutorial: https://dev.to/saulojoab/how-to-get-data-from-an-mysql-database-in-react-native-53a4
const express = require('express');
const router = express.Router();
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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

//helper function
    function query(conn, sql, args) {
        return new Promise( ( resolve, reject ) => {
            conn.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        })
    }

app.get('/profile/:id', (req, res) => {
      let test1 = getProfileInfo(req.params.id);
      test1.then(result => res.send(result[0][0]));
});

//Retrieve activities (returns a list of activities)
app.get('/activities/:id', (req, res) => {
  let test1 = getActivities(req.params.id);
  test1.then(result => res.send(result[0][0]));
});

const badge = {
  LEVEL_0: '0',
  LEVEL_1: '1',
  LEVEL_2: '2',
  LEVEL_3: '3'
}
// custom method : returnBadgeFromProgress
function getBadgeFromProgress(){

}

async function getProfileInfo(accID) {
   let res = await query(connection, `call retrieve_points_acc(${accID})`)
   return res;
 }

 async function getActivities(accID) {
    let res = await query(connection, `call retrieve_activities_acc(${accID})`)
    return res;
  }

app.listen(3000, ()=>{
      console.log("Server Running on port 3000.");
  });
