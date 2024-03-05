import React, { useEffect, useState } from 'react'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './Doctor.css'


const Doctoredit = (props) => {
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3002/subview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])


    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put'){

            axios.put("http://localhost:3002/edit/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("Success")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <Topbar/>
      <Sidebar/>
      <h2>Edit Doctors</h2>
  
  <TextField label="Doctor name" name="name" variant="filled" value={inputs.name}onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
    </TextField> &nbsp;&nbsp;
    <TextField  label="Email" type='text' name="email" variant="filled" value={inputs.email} onChange={inputHandler}/><br /><br />
    <TextField  label="Phone" type='text' name="phone" variant="filled" value={inputs.phone} onChange={inputHandler}/>&nbsp;&nbsp;
    <TextField  label="Hospital" type='text' name="hospital" variant="filled" value={inputs.hospital} onChange={inputHandler}/><br /><br />
    <TextField  label="Specialization" type='text' name="specialization" variant="filled" value={inputs.specialization} onChange={inputHandler}/>&nbsp;&nbsp;
    <TextField  label="Experience" type='text' name="experience" variant="filled" value={inputs.experience} onChange={inputHandler}/><br /><br />
    <TextField  label="Qualification" type='text' name="qualification" variant="filled" value={inputs.qualification} onChange={inputHandler}/>&nbsp;&nbsp;
    <TextField  label="Location" type='text' name="location" variant="filled" value={inputs.location} onChange={inputHandler}/><br /><br />
    <label>Gender </label>
    <Select
   labelId="demo-simple-select-label"
    name='gender'value={inputs.gender} onChange={inputHandler}>
   <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="others">Others</MenuItem>
  </Select><br /><br />

  <Button variant="contained" onClick={addHandler} >Update</Button>
  </div>
    
  )
}

export default Doctoredit
