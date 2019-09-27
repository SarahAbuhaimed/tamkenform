const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name : { type: String, required: true},
    age: { type: Number, required: true},
    country: { type: String, required: true},
    city: { type: String, required: true},
},{timestamps : true})

const Person = mongoose.model('Person', personSchema)
module.exports = Person