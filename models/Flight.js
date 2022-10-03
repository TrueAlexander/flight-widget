import mongoose from "mongoose"

const FlightSchema = new mongoose.Schema({
  departing: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  gate: {
    type: String,
    required: true,
    unique: true,
  },
 status: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Flight', FlightSchema)