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
            }
        })
    }
    getSignup(req,res){
       
            

               res.render('./authentications/signup',{title:'signup',layout:'./layouts/main'});
            
            
        
            
            
    }
    postSignup(req,res){
        const firstName=req.body.first_name;
        const lastName=req.body.last_name;
        const mobiphoneNumber=req.body.mob_no;
        const userName=req.body.user_name;
        const passWord=req.body.password;
        authenticationModel.inputSignup(firstName,lastName,mobiphoneNumber,userName,passWord,(result)=>{
           
        });
        res.render('./authentications/signup',{title:'signup',layout:'./layouts/main'});
    }
    getHome(req,res){

        if(req.session)
            
        res.render('./authentications/home',{title:'home',layout:'./layouts/main'});
    }
    


}

module.exports =new AuthenticationController();