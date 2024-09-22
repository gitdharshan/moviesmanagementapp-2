const mongoose = require('mongoose');

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const movie_id = req.params.movie_id;

  try {
    const movie = await moviesModel.findOne({ _id: movie_id });

    if (!movie) {
      return res.status(404).json({
        status: "failed",
        message: "This movie doesn't exist",
      });
    }

    await moviesModel.deleteOne({ _id: movie_id });

    res.status(200).json({
      status: "success",
      message: "Movie deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
};

module.exports = deleteMovie;
