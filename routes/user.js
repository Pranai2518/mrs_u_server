const router = require('express').Router()
const User = require('../models/user.model')
const Movie = require('../models/movie.model')

router.route('/all').get(async (req, res) => {
    const users = await User.find({})
    let uids = []
    for (let user of users) {
        uids.push(user.uid)
    }
    res.json({ 'users': uids })
})

router.route('/add').post(async (req, res) => {
    const obj = {
        username: req.body.username,
        uid: req.body.uid,
        photoUrl: req.body.photoUrl,
        email: req.body.email
    }
    const addUser = new User(obj)
    addUser.save()
        .then(obj => { res.json(obj) })
        .catch(err => { res.json(err) })
})
router.route('/add/movie').post(async (req, res) => {
    const obj = {
        uid: req.body.uid,
        movieId: req.body.movieId,
        title: req.body.title,
        rating: req.body.rating,
        watched: req.body.watched,
        myList: req.body.myList
    }
    const addUserMovie = new Movie(obj)
    addUserMovie.save()
        .then(obj => { res.json(obj) })
        .catch(err => { res.json(err) })
})


//get movies of user
router.route('/:uid/movie/:mid').get(async (req, res) => {
    const uid = req.params.uid
    const mid = req.params.mid
    const movie = await Movie.find({ uid: uid, movieId: mid })
    res.json(movie)
})
router.route('/:uid/movies').get(async (req, res) => {
    const uid = req.params.uid
    const movie = await Movie.find({ uid: uid })
    res.json(movie)
})

//delete movie 
router.route('/:uid/movie/:mid').delete(async (req, res) => {
    const uid = req.params.uid
    const mid = req.params.mid
    const movie = await Movie.find({ uid: uid, movieId: mid }).deleteOne()
    res.json({ movieId: req.params.mid })
})





module.exports = router