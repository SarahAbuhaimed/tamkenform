const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema({
    name : { type: String, required: true},
    age: { type: number, required: true},
    country: { type: String, required: true},
    city: { type: String, required: true},
},{timestamps : true})

const Tform = mongoose.model('Tform', formSchema)
module.exports = Tform