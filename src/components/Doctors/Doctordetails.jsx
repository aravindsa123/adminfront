import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Doctoredit from './Doctoredit';
import './Doctorview.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';
import {Buffer} from 'buffer';

const Doctordetails = () => {
  var [category, setCategory] = useState([]);
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3002/display")
      .then(response => {
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  const updateValues = (row) => {
    setSelected(row)
    setUpdate(true)
  }
  var result =
    <div className='bb'>
      <Topbar/>
      <Sidebar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Doctor name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Hospital</TableCell>
                        <TableCell>Specialization</TableCell>
                        <TableCell>Experience</TableCell>
                        <TableCell>Qualification</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>TimeSlot</TableCell>
                        <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  
                  <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.hospital}</TableCell>
                                <TableCell>{row.specialization}</TableCell>
                                <TableCell>{row.experience}</TableCell>
                                <TableCell>{row.qualification}</TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>{row.timeSlot}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                  <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>
                   {/* <TableCell>
                       <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}
                        width="50" height="50" alt="Error"/></TableCell>  */}
                        <TableCell>
                          <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}width="50" height="50" alt='error'/>
                        </TableCell>

                </TableRow>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  if (update)
    result = <Doctoredit data={selected} method='put' />
  return (result)
}

export default Doctordetails
