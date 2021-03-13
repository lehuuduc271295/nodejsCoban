const mysql=require('mysql');

var conn=mysql.createConnection({
    host:"localhost",
    username:"root",
    password:"duc123456",
    database:"diem"

});


module.exports=conn;