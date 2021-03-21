const newsRouter = require("./news");
const diemRouter = require("./diem");
const authenticationRouter = require("./authentication");

function route(app) {
    // app.get('/new',(req,res)=>{
    //   res.render('news');
    //});
    app.use("/diem", diemRouter);
    app.use("/", authenticationRouter);
    app.use("/", newsRouter);
}
module.exports = route;
