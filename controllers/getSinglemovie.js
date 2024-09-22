const mongoose = require('mongoose');

const getSingleMovie = async(req,res) =>{
  const movieModel = mongoose.model("movies");

  try{
   const movieData = await movieModel.find({
    id: req.params.movie_id,
   });
   res.status(200).json({
    status: "success",
    data: movieData
   })
  }
  catch(e){
   res.status(400).json({
    status: "failed",
    message: e.message,
   });
   return;
  }
}

module.exports = getSingleMovie;