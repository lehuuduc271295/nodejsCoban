const db = require("../database");

class AuthenticationQurey {
    var;

    inputSignup(firstName, lastName, mob, userName, passWord, cb) {
        var sql =
            "insert into users (first_name,last_name,mob_no,user_name,password) values(?,?,?,?,?)";
        db.query(sql, [firstName, lastName, mob, userName, passWord], (err, result) => {
            return cb(result);
        });
    }

    outputlogin(userName, passWord, cb) {
        var sql = "select * from users where user_name=? and password=?";
        db.query(sql, [userName, passWord], (err, result) => {
            return cb(result);
        });
    }
}

<<<<<<< HEAD
module.exports =new AuthenticationQurey();
=======
module.exports = new AuthenticationQurey();
>>>>>>> main
