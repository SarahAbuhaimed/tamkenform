require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 4000
const app = express()
const cors = require('cors')

const passport = require('passport')
const mongooseConnect = require('./config/mongodb')


app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine', 'ejs');



app.use('*', (request, response) => {
    response.status(404).json({message : "Data not found!"})
   })
   
app.listen(PORT, () => console.log(`connected to ${PORT}`))