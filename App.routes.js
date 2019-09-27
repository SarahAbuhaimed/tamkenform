const express = require('express');
const Form = require('../tform/tamkenform')
const router = require('express').Router()

//Form INDEX
router.get('/', (req, res)=>{
    Form.find({})
  .then(forms => {
   if(forms.length < 1){
    return res.json({ forms : forms, message : 'nothing found'})
   }
   res.status(200).json({ forms : forms})
  })
  .catch(err => {
   res.send({ message : err})
  })
  
})

//Form add
router.post('/', (req, res)=>{
  let data = {
    name : req.body.name,
    age: req.body.age,
    country: req.body.country,
    city: req.body.city
  }
  
  let forms = new Case(data)
  forms.save()
  .then(()=> {
    console.log("yes working")
   res.status(200).json({ forms : forms, message: "saved"})
  })
  .catch(err => {
    console.log("err")
   res.status(201).json({ message : err})
  })
})
module.exports = router