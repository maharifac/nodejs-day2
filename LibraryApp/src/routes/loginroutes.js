const express=require('express');
const loginRouter=express.Router();
function router(nav){
    
    loginRouter.route('/')
    .get(function(req,res){
        res.render(
            'login.ejs',
        {
            nav,
            title:'Login',

        })
    })
    return loginRouter;

}
module.exports=router;