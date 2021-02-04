const fs=require('fs');

const logMiddleware = (req,res,next)=>{
    fs.appendFileSync('logs/userLogs.txt', `Ingreso a la ruta ${req.url}\n`);
  
    next();
}

module.exports=logMiddleware;