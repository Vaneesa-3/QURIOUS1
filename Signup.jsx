import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('signup');

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/signup', { name, email, password })
      .then(result => {
        console.log(result.data);
        alert('Signup successful!');
        navigate('/login'); // Optional: redirect to login after signup
      })
      .catch(err => {
    if (err.response) {
      // Log the message only, not the entire error object
      console.log("Server message:", err.response.data);
      alert(err.response.data); // e.g., "User already exists"
    } else {
      console.log("Unexpected error:", err.message);
      alert('Signup failed! Please try again.');
    }
  });
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      
    >
      {/* currently there is no color for box */}

      <Paper elevation={13} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h4" align="center" gutterBottom>
          QURIOUS
        </Typography>

        <Box display="flex" justifyContent="center" mb={3}>
          <ToggleButtonGroup
  value={selected}
  exclusive
  onChange={(event, newVal) => {
    if (newVal !== null) {
      setSelected(newVal);        // update the selected state
      if (newVal === 'signup') {
        navigate('/signup');      // go to /signup page
      } else if (newVal === 'login') {
        navigate('/login');       // optional: go to /login if needed
      }
    }
  }}
>

            <ToggleButton value="signup">Signup</ToggleButton>
            <ToggleButton value="login">Login</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField fullWidth type="text" label="Username" margin="normal" 
          onChange={(e)=>setName(e.target.value)}/>
          <TextField fullWidth type="email" label="Email" margin="normal" 
          onChange={(e)=>setEmail(e.target.value)}/>
          <TextField fullWidth type="password" label="Password" margin="normal" 
          onChange={(e)=>setPassword(e.target.value)}/>
          
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#9db4ff' }}>
            Sign-Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
