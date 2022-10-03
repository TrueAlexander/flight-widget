import { useState, useEffect } from 'react'
import TableRow from './TableRow'

const TableBody = () => {

  const [flights, setFlights] = useState(null)

  const getFlights = () => {
    fetch('http://localhost:5555/flights')
      .then(response => response.json())
      .then(flights => {
        setFlights(flights)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => getFlights(), [])
  
  console.log(flights)
  return (
    <tbody>
      {flights?.map((flight) => (
        <TableRow key={flight._id} flight={flight} />
      ))}
    </tbody>
  )
}

export default TableBody
