import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
// import FlightSchema from './model.js'
const PORT = 4444
const app = express()
app.use(cors())

mongoose.connect('mongodb+srv://TrueAlexander:Parol1001@cluster0.dkscvk5.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB ok'))
.catch((err) => console.log('DB error', err))

const flightsSchema = {
  departing: String,
  destination: String,
  flightNumber: String,
  gate: String,
  status: String,
}

const Flight = mongoose.model('Flight', flightsSchema)

app.get('/flights', (req, res) => {
  try {
    
    const allFlights = Flight.find({}, function(flights) {
      // res.send(flights.json())
    })
    

    
    
   

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'not got flights',
    })
  }
})

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log(`Server OK on port: ` + PORT)
})


// const PORT = 8000
// const axios = require('axios').default
// const express = require('express')
// const cors = require('cors')
// require('dotenv').config()

// const app = express()

// app.use(cors())

// app.get('/flights', (req, res) => {
//   const options = {
//     url: `${process.env.URL}?page-size=6`,
//     headers: {
//       accept: `application/json`,
//       'X-Cassandra-Token': process.env.TOKEN,
//     }
//   }
//   axios.request(options).then(response => {
//     console.log(response.data)
//     res.json(response.data)
//   }).catch(error => console.log(error))
// })

// app.listen(PORT, () => console.log('running on port ' + PORT))
