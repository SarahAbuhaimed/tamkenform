const express = require('express');
const Person= require('./person')
const router = require('express').Router()

//Form INDEX
router.get('/', (req, res)=>{
    Person.find({})
  .then(persons => {
   if(persons.length < 1){
    return res.json({ persons : persons, message : 'nothing found'})
   }
   res.status(200).json({ persons : persons})
  })
  .catch(err => {
   res.send({ message : err})
  })
  
})

//person add
router.post('/', (req, res)=>{
  let data = {
    name : req.body.name,
    age: req.body.age,
    country: req.body.country,
    city: req.body.city
  }
  
  let persons = new Person(data)
  persons.save()
  .then(()=> {
    console.log("yes working")
   res.status(200).json({ persons : persons, message: "saved"})
  })
  .catch(err => {
    console.log("err")
   res.status(201).json({ message : err})
  })
})
module.exports = router