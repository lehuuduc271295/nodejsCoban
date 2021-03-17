const myModel=require('C:\\Users\\Duc\\Desktop\\test1\\src\\models\\MyModel.js');
class DiemController{

    createget(req,res){
        res.render('./diem/create',{title:'create',layout:'./layouts/main'});

    }

    createpost(req,res){

        var mssv=req.body.mssv;
        var mmh=req.body.mmh;
        var dqt=req.body.dqt;
        var dt=req.body.dt;

        myModel.create(mssv,mmh,dqt,dt,(data)=>{
           console.log(data);
        });
        res.render('./diem/create',{title:'create',layout:'./layouts/main'});
    }

    showdiem(req,res){
        myModel.showdiem((data)=>{
            
           res.render('./diem/showdiem',{layout:'./layouts/site',user:data});

        })
    }
    searchget(req,res){
        
        res.render('./diem/searchdiem',{layout:'./layouts/site'});
    }
    searchpost(req,res){
        var mssv=req.body.timkiem;
        myModel.searchdiem(mssv,(data)=>{
            res.render('./diem/searchdiempost',{layout:'./layouts/site',user:data});
        });
    }

}


module.exports= new DiemController;