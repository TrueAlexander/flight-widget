import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import FlightModel from './models/Flight.js'

mongoose.connect('mongodb+srv://TrueAlexander:Parol1001@cluster0.dkscvk5.mongodb.net/widget-flights?retryWrites=true&w=majority')
.then(() => console.log('DB ok'))
.catch((err) => console.log('DB error', err))

const PORT = 5555
const app = express()
app.use(cors())


app.get('/flights', async (req, res) => {
  
  try {
  const flights = await FlightModel.find()
   res.json(flights)

  } catch (err) {
    res.status(500).json({
      message: 'Error ' + err, 
    })
  }
})

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log(`Server OK on port: ` + PORT)
})
