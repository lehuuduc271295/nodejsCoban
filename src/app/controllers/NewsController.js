const myModel=require('C:\\Users\\Duc\\Desktop\\test1\\src\\models\\MyModel.js');
const db=require('C:\\Users\\Duc\\Desktop\\test1\\src\\database.js');

class NewsController{

    // GET  /news
    new(req,res){
        res.render('news',{title:'new page',layout:'./layouts/main'});

    }
    show(req,res){
        res.send('new detail');

    }
    index(req,res){
        res.render('home',{title:'Home page',layout:'./layouts/main'});
}
search(req,res){
    res.render('search',{title:'search page',layout:'./layouts/main'});
}

    createget(req,res){
        res.render('create',{title:'create' ,layout:'./layouts/main'});

    }

    createpost(req,res){

        var mms=req.body.mms;
        var mmh=req.body.mmh;
        var dqt=req.body.dqt;
        myModel.create(mms,mmh,dqt,(data)=>{
            console.log(data);
        });


    }

}   
module.exports = new NewsController ;