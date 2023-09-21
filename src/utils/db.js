// here we keep all database connection
require("dotenv").config();

const mysql = require("mysql");

//define the connection
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});


// make the connection
connection.connect();

connection.queryPromise = (sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, rows) => {
      if(err) {
        reject(err);
      } else {
        resolve(rows);
      }
    })
  })
};

// go farther, and if you want to process the results of your promise and return the results
// you want to make a blocking function that always returns an err or rows

// this is were async and await come to play.
// this is middleware function
connection.querySync = async (sql, params) => {
  let promise = new Promise((resolve, reject) => {
    console.log("Executing query", sql)
    connection.query(sql, params, (err, results) => {
      if(err) {
        console.log("rejecting");
        return reject(err)
      } else {
        console.log("resolving")
        return resolve(results)
      }
    })
  })

  let results = await promise.then((results) => {
    console.log("results ", results);
    return results;
  }).catch((err) => {
    throw err;
  }) 
  return results;
}

// making an async call to test the connection
connection.query("select now()", (err, rows) => {
  if(err) {
    console.log("Connection not successful", err)
  } else {
    console.log("Connected, ", rows)
  }
})

module.exports = connection;