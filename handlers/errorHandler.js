const errorHandler = (error, req,res,next) => {
if(error){
  res.status(400).json({
    status: "falied",
    message: "Something went error"
  })
}
else{
  next();
}
};

module.exports = errorHandler;