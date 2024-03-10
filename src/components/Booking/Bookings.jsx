import React, { useEffect, useState } from 'react'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import './Bookings.css'
import axios from 'axios'

const Bookings = () => {
    var [books, setBooks] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3002/booking")
        .then(response => {
          setBooks(response.data)
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='bo'>
      <Topbar/>
      <Sidebar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Doctor id</TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  <TableCell>
                    {row.did}
                  </TableCell>
                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Bookings
