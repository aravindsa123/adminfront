import { Button, TextField, Paper } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({ "username": '', "password": '' });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const navigate = useNavigate();

  const checkData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/Loginsearch", {
        username: inputs.username,
        password: inputs.password,
      });

      if (response.data.success) {
        alert('Login successful');
        navigate('ViewDetails');
      } else {
        alert('Invalid Username and Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      alert('Error occurred during login. Please try again.');
    }
  };

  return (
    <div style={{ background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '300px', margin: '20px', boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.2)' }}>
        <center>
          <h1>Welcome Back!</h1>
          <h2>Login</h2>
          <TextField label="Username" name="username" variant="outlined" value={inputs.username} onChange={inputHandler} fullWidth margin="normal" />
          <TextField label="Password" name='password' variant="outlined" type="password" autoComplete='current-password' value={inputs.password} onChange={inputHandler} fullWidth margin="normal" />
          <Button variant="contained" color="primary" onClick={checkData} fullWidth>Login</Button>
        </center>
      </Paper>
    </div>
  );
};

export default Login;
