require("express-async-errors");

const express = require('express');
require("dotenv").config();

const addMovie = require('./controllers/addMovie');
const getAllmovies = require('./controllers/getAllmovies');
const getSinglemovie = require('./controllers/getSinglemovie');
const editMovie = require('./controllers/editmovie');
const deleteMovie = require('./controllers/deleteMovie');
const movieRecommendation = require('./controllers/movieRecommedation');
const app = express();


app.use(express.json());



require("./models/movies.model");

const mongoose = require('mongoose');
const errorHandler = require("./handlers/errorHandler");
mongoose.connect(process.env.mongo_connection,{}).then(() => {
  console.log("Connection to mongodb successfull");
}).catch(() => {
  console.log("Connection is failed")
})
app.get('/api/movies/getRecommendation',movieRecommendation);
app.post('/api/movies',addMovie);
app.get("/api/movies", getAllmovies);
app.get("/api/movies/:_id",getSinglemovie);
app.patch('/api/movies',editMovie);
app.delete('/api/movies/:movie_id',deleteMovie);


//open AI
app.get('/api/movies/openai/getRecommendation',movieRecommendation);

app.listen(8000,() => {
  console.log("Server started successfully");
})