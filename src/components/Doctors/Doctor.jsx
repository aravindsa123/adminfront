import {  MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Doctor.css';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Doctor = () => {
  var[inputs,setInputs]=useState({
    "name":'',
    "email":'',
    "phone":'',
    "hospital":'',
    "specialization":'',
    "experience":'',
    "qualification":'',
    "location":'',
    "gender":'',
    "timeSlot":''
  })

  var[selectedimage,setSelectedimage]=useState(null);
  

  const inpuHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

  const savedata=()=>{
    const formdata=new FormData();
    formdata.append('name',inputs.name);
    formdata.append('email',inputs.email);
    formdata.append('phone',inputs.phone);
    formdata.append('hospital',inputs.hospital);
    formdata.append('specialization',inputs.specialization);
    formdata.append('experience',inputs.experience);
    formdata.append('qualification',inputs.qualification);
    formdata.append('location',inputs.location);
    formdata.append('gender',inputs.gender);
    formdata.append('timeSlot',inputs.timeSlot);
    formdata.append('image1',selectedimage);
    fetch('http://localhost:3002/new',
    {
        method:'post',
        body:formdata,
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
    })
    .catch((err)=>{
        console.log("error")
    })
}

  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.image1=file;
    }

  return (

    <div >
      <Topbar/>
      <Sidebar/>
    <div><h1 className="addproduct">Doctor Details</h1> 
      <TextField label="Doctor name" type="text" name="name" value={inputs.name} onChange={(event) => inpuHandler (event)}/> &nbsp;
      <TextField label="Email" type="text" name="email" value={inputs.email} onChange={(event) => inpuHandler (event)}/><br/><br/>
      <TextField label="Phone" type="text" name="phone" value={inputs.phone} onChange={(event) => inpuHandler (event)}/> &nbsp;
      <TextField label="Hospital" type="text" name="hospital" value={inputs.hospital} onChange={(event) => inpuHandler (event)}/> <br /><br />

      <label>Department </label>
      <Select name="specialization" value={inputs.specialization} onChange={inpuHandler}>
        <MenuItem value="Ayurveda">Ayurveda</MenuItem>
            <MenuItem value="Cardiology">Cardiology</MenuItem>
            <MenuItem value="Dentist">Dentistry</MenuItem>
            <MenuItem value="Dermatologist">Dermatology</MenuItem>
            <MenuItem value="Physiotherapist">Physiotherapy</MenuItem>
            <MenuItem value="Psychologist">Psychology</MenuItem>
            <MenuItem value="Pulmonology">Pulmonology</MenuItem>
            <MenuItem value="Surgeon">Surgeon</MenuItem>  
      </Select>&nbsp;

      <TextField label="Experience" type="text" name="experience" value={inputs.experience} onChange={(event) => inpuHandler (event)}/>  <br /><br />
      <TextField label="Qualification" type="text" name="qualification" value={inputs.qualification} onChange={(event) => inpuHandler (event)}/>  &nbsp;
      <TextField label="Location" type="text" name="location" value={inputs.location} onChange={(event) => inpuHandler (event)}/> <br /><br />

      <label>Gender </label>
      <Select name="gender" value={inputs.gender} onChange={inpuHandler}>
        <MenuItem value="Male" selected>Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
      </Select><br /><br />

      <label>Select Time Slot: </label>
        <select name="timeSlot" value={inputs.timeSlot} onChange={inpuHandler} >
          <option value="">-- Select a time slot --</option>
          <option value="5:00 PM - 9:30 PM">5:00 PM - 9:30 PM</option>
          <option value="5:00 PM - 9:30 PM">6:00 PM - 8:00 PM</option>
          <option value="5:00 PM - 9:30 PM">5:00 PM - 7:30 PM</option>
          <option value="5:00 PM - 9:30 PM">6:00 PM - 9:00 PM</option>
          <option value="5:00 PM - 9:30 PM">6:00 PM - 9:30 PM</option>
          <option value="5:00 PM - 9:30 PM">5:30 PM - 8:30 PM</option>
          <option value="5:00 PM - 9:30 PM">5:30 PM - 8:00 PM</option>
        </select>&nbsp;
      
      <label>Upload photo </label>
        <input type="file" onChange={handleimage}></input>
        <br /><br />
      <button className="addproduct-btn" onClick={()=>{savedata()}}>Submit</button>
    </div>
    </div>
  )
}

export default Doctor
