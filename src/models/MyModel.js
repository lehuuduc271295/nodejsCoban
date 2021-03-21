const db = require("../database");

class query {
    create(mssv, mmh, dtb, callback) {
        var sql = "insert into diem (Ma_SV,Ma_MH,DQT) values(?,?,?)";
        db.query(sql, [mssv, mmh, dtb], (err, data) => {
            if (err) throw err;
            return callback(data);
        });
    }
    showdiem(cb) {
        var sql = "select * from diem";
        db.query(sql, (err, data, field) => {
            if (err) throw err;
            return cb(data);
        });
    }
}

module.exports = new query();
