const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    uid: { type: String, required: true },
    movieId: { type: String },
    title: { type: String },
    rating: { type: String },
    watched: { type: Boolean },
    myList: { type: Boolean }
}, { timestamps: true })

const Movie = mongoose.model('userMovies', movieSchema);
module.exports = Movie