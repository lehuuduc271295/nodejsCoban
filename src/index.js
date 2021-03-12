const express=require('express');
const morgan=require('morgan');
const path=require('path');
const handlebars=require('express-handlebars');
const app=express();
const route=require('./routes');
const port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
//htttp logger
app.use(morgan('combined'));
// template engine
app.engine('hbs',handlebars({extname:'.hbs'}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname+'/resources/views'));

route(app);


app.listen(port,()=>console.log('example app listenning at http://localhost://3000'));
