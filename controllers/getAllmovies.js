const mongoose = require('mongoose');

const getAllmovies = async (req,res) => {

  const moviesModel = mongoose.model("movies");

  const moviesData = await moviesModel.find({
    rating: 9,
    
  })
  res.status(200).json({
    status: "Hello from get all movies",
    data: moviesData,
  })
}

module.exports = getAllmovies;