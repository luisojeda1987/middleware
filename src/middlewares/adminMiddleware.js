const fs=require('fs');

const adminMiddleware = (req,res,next)=>{
    const {user}= req.query;
    const admins = ['Ada', 'Greta', 'Vim', 'Tim'];
  
    if(admins.includes(user)){
        req.admin= user;
        return next();
    }
    res.render('index', {
        title:'No tienes privilegios para ingresar',
    });
}

module.exports=adminMiddleware;