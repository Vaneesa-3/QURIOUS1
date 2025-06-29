import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', { email, password })
      .then(result => {
  console.log("Login success:", result.data);
  alert('Login successful!');

  // Save token and role
  localStorage.setItem('token', result.data.token);
  localStorage.setItem('role', result.data.role);

  // Navigate to common landing page
  navigate('/landing');
})

      .catch(err => {
        if (err.response) {
          console.log("Server message:", err.response.data);
          alert(err.response.data); // e.g., "Invalid credentials"
        } else {
          console.log("Unexpected error:", err.message);
          alert('Login failed! Please try again.');
        }
      });
  };

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
          <TextField fullWidth type="email" label="Email" margin="normal" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <TextField fullWidth type="password" label="Password" margin="normal"
          value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#9db4ff' }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
