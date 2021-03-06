

const express=require('express');
const loginRouter=express.Router();
const Signupdata=require('../model/Signupdata');


function router(nav1){
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav1,
            title:'Login'
        });
    });

    // router for logIn and validation
    loginRouter.post('/add',function(req,res){
         var logindata={
             user:req.body.email,
             password:req.body.password
         }

         var flag=false;
         Signupdata.find().then(function(data){
             for(var i=0;i<data.length;i++){
                 if(logindata.user==data[i].email&&logindata.password==data[i].spassword){
                    flag=true;
                    break;
                 }
                 else if(logindata.user=='admin@gmail.com'&&logindata.password=='12345'){
                     console.log('admin login');
                     flag=true;
                    break;
                 }
                 else
                 {
                    flag=false
                 }
             }
             console.log(flag);
             if(flag==true){
                 res.redirect('/index1');
             }
             else{
                 res.redirect('/signup');
                 
             }
         })
         
    });
    return loginRouter;
}

module.exports=router;