
const newsRouter = require('./news');
const siteRouter =require('./site');
function  route(app){

    // app.get('/new',(req,res)=>{
     //   res.render('news');
    //});
    app.use('/new',newsRouter);
    app.use('/',siteRouter);
    

    
}
module.exports =route;