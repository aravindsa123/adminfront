import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Department.css'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'



const Department = () => {
  
    
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3002/categoryview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])

    var[inputs,setInputs]=useState({
      "pname":'',
      "specialization":'',
      "status":'Active'
    })
  
    const inputHandler =(event) =>{
      const{name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
    }
  
      const addHandler=() =>{
        console.log("Clicked")
  
        console.log(inputs)
        axios.post("http://localhost:3002/cnew",inputs)
        .then((response)=>{
          alert("Record Saved")
        })
        .catch(err=>console.log(err))
        
    }
  
  return (
    <div >
      <Topbar/>
      <Sidebar/>
      <h2>Department</h2>
    <TextField label="Doctor name" name="pname" variant="filled" value={inputs.pname}onChange={inputHandler}><br /><br />
    
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
    </TextField> <br /><br />
    <label>Department </label>
      <Select name="specialization" value={inputs.specialization}onChange={inputHandler}>
        <MenuItem value="Ayurveda">Ayurveda</MenuItem>
            <MenuItem value="Cardiology">Cardiology</MenuItem>
            <MenuItem value="Dentist">Dentistry</MenuItem>
            <MenuItem value="Dermatologist">Dermatology</MenuItem>
            <MenuItem value="Physiotherapist">Physiotherapy</MenuItem>
            <MenuItem value="Psychologist">Psychology</MenuItem>
            <MenuItem value="Pulmonology">Pulmonology</MenuItem>
            <MenuItem value="Surgeon">Surgeon</MenuItem>  
      </Select><br /><br />

    <Select
   labelId="contained" label="Status"
    name='status'value={inputs.status} onChange={inputHandler}>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="In-Active">In-Active</MenuItem>
    </Select><br /><br />
    <Button variant="contained" onClick={addHandler} >Submit</Button>
    </div>
  )
}

export default Department