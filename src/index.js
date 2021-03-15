const express=require('express');
const morgan=require('morgan');
const path=require('path');
const ejs=require('ejs');
const expresslayouts=require('express-ejs-layouts');
const app=express();
const route=require('./routes');





app.set('layout','./layouts/site');
app.use(expresslayouts);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
//htttp logger
app.use(morgan('combined'));
// template engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname+'/resources/views'));

route(app);


app.listen(3000,()=>console.log('example app listenning at http://localhost://3000'));
