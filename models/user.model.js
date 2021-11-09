const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    uid: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    photoUrl: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
}, { timestamps: true })

const User = mongoose.model('users', userSchema)
module.exports = User