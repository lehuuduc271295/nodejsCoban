
const newsRouter = require('./news');

function  route(app){

    // app.get('/new',(req,res)=>{
     //   res.render('news');
    //});
   
    app.use('/',newsRouter);
    

    
}
module.exports =route;