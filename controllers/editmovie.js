const mongoose = require('mongoose');

const editMovie  =  async(req,res) => {
  const movieModel = mongoose.model("movies");

  const{movie_id,movie_name,info,rating,description} = req.body;
   
 try{
   if(!movie_id) throw "Movie id is required";
 }  catch(e){
    res.status(400).json({
      status: "failed",
      message: e,
    })
    return;
 }

  try{
await movieModel.updateOne(
  {
    _id: movie_id,
  },{
   movie_name : movie_name,
   info: info,
   rating: rating,
  description: description
  },{
   
  },{
    rating: rating,
  }, {
 
  runValidators: true,    
  }
)
  }
  catch(e){
   res.status(400).json({
    status: "Failed",
    message:  e.message,
   });
   return;
  }
  res.status(200).json({
    status: "Hello from update route!"
  })
  
}


module.exports = editMovie;