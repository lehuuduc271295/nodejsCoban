<<<<<<< HEAD
const authenticationModel=require('../../models/AuthenticationModel');
class AuthenticationController{
    
     getLogin(req,res){

        res.render('./authentications/login',{title:'login',layout:'./layouts/main'});
    }
    postLogin(req,res){
        const userName=req.body.user_name;
        const password=req.body.password;
        var session=req.session;
        authenticationModel.outputlogin(userName,password,(result)=>{
            
            if(result!==null)
            {
               
                session.userId=result[0].id;
                session.user=result[0];
                console.log(req.session.userId);
               
               res.redirect('/diem/create');
            }
            else{
                res.redirect('/new');
=======
const { NULL } = require("node-sass");
const authenticationModel = require("../../models/AuthenticationModel");
class AuthenticationController {
    getLogin(req, res) {
        res.render("./authentications/login", { title: "login", layout: "./layouts/main" });
    }
    postLogin(req, res) {
        const userName = req.body.user_name;
        const password = req.body.password;
        authenticationModel.outputlogin(userName, password, (result) => {
            if (typeof result[0].user_name == "string") {
                console.log(result[0].user_name);
                req.session.userId = result[0].id;
                req.session.user = result[0];
                console.log(req.session.userId);
                res.redirect("/diem/create");
            } else {
                res.redirect("/new");
>>>>>>> main
            }
        });
    }
<<<<<<< HEAD
    getSignup(req,res){
       
            

               res.render('./authentications/signup',{title:'signup',layout:'./layouts/main'});
            
            
        
            
            
=======
    getSignup(req, res) {
        res.render("./authentications/signup", { title: "signup", layout: "./layouts/main" });
>>>>>>> main
    }
    postSignup(req, res) {
        const firstName = req.body.first_name;
        const lastName = req.body.last_name;
        const mobiphoneNumber = req.body.mob_no;
        const userName = req.body.user_name;
        const passWord = req.body.password;
        authenticationModel.inputSignup(
            firstName,
            lastName,
            mobiphoneNumber,
            userName,
            passWord,
            (result) => {}
        );
        res.render("./authentications/signup", { title: "signup", layout: "./layouts/main" });
    }
<<<<<<< HEAD
    getHome(req,res){

        if(req.session)
            
        res.render('./authentications/home',{title:'home',layout:'./layouts/main'});
=======
    getHome(req, res) {
        res.render("./authentications/home", { title: "home", layout: "./layouts/main" });
>>>>>>> main
    }
}

<<<<<<< HEAD
module.exports =new AuthenticationController();
=======
module.exports = new AuthenticationController();
>>>>>>> main
