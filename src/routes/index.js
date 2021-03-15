
const newsRouter = require('./news');
const diemRouter=require('./diem');

function  route(app){

    // app.get('/new',(req,res)=>{
     //   res.render('news');
    //});
    app.use('/diem',diemRouter);
    app.use('/',newsRouter);

    

    
}
module.exports =route;