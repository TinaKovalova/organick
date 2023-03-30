const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : process.env.PASSWORD,
    database : 'organick'
});

db.connect((error)=>{
    if(error) throw error;
    console.log("Database Connected!");
})

module.exports = db;