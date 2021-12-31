const express = require('express'); 
const loginRouter = express.Router();
const data = require('../data/user');

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.post("/",function(req,res){
    var checkuser = {
        uid:req.body.uid,
        pwd:req.body.pwd
    };
    
   
    var flag=false;
    var user = data.users
//    var flagg = user.find((e)=>{
       for(let i=0;i<user.length;i++){
        
        if(checkuser.uid==user[i].uid && checkuser.pwd==user[i].pwd)
        {
            
            flag=true;
            break;
        }
        else{
                flag=false;
            }
        };

        console.log(flag);

if(flag==true){
    // alert("User Verified.Click to continue");
    res.redirect("/home")
}
else{
    // alert("User Verification Failed");
    res.redirect("/signup");
}

});




module.exports = loginRouter;