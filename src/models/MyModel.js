const db=require('../database');

class query{
    create(mssv,mmh,dtb,dt,callback){
        var sql="insert into diem (Ma_SV,Ma_MH,DQT,DT) values(?,?,?,?)";
        db.query(sql,[mssv,mmh,dtb,dt],(err,data)=>{
            if(err) throw err ;
            return callback(data);
        });
    }
    showdiem(cb){
        var sql="select * from diem";
        db.query(sql,(err,data,field)=>{
            if(err) throw err;
            return cb(data);
        })
    }
    searchdiem(tim,cb){
        var sql="select * from diem where Ma_SV=?";
        db.query(sql,[tim],(err,data)=>{
            
            if(err)  throw err;
            return cb(data);
        })
    }

}

module.exports= new query;