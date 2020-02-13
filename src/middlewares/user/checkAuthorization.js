module.exports=async (req,res,next)=>{
  try {
      if (req.headers.authorization){
          req.authorizationData={
              id:req.headers.authorization
          };
         return  next();
      }
      res.status(401).send('Authorization fail')
  }
  catch (e) {
      next(e)
  }
};