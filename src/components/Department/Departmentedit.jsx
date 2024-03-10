import React, { useEffect, useState } from 'react'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './Department.css'



const Departmentedit = (props) => {
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3002/categoryview")
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

            axios.put("http://localhost:3002/edits/"+inputs._id,inputs)
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
      <h2>Edit Department</h2>
   
  
  {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
  <TextField label="Doctor name" name="pname" variant="filled" value={inputs.pname} onChange={inputHandler}>
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
   labelId="demo-simple-select-label"
    name='status'value={inputs.status} onChange={inputHandler}>
      <MenuItem value="Active">Active</MenuItem>
   <MenuItem value="In-Active">In-Active</MenuItem>
        
  </Select><br /><br />
{/* </FormControl><br/><br/> */}
  <Button variant="contained" onClick={addHandler} >Update</Button>
  </div>
    
  )
}

export default Departmentedit
