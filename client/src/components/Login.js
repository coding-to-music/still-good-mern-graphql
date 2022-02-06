import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Stack, TextField, Button } from '@mui/material';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

function Login() {
  const [login] = useMutation(LOGIN);
  
  const [formState, setformState] = useState({
    email: '',
    password: '',
  });



  async function handleChange(event) {
    const { name, value } = event.target;
    setformState({
      ...formState,
      [name]: value,
    });
  }
  async function handleLogin(event) {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  }

  return (

   
        <form id="login-form" onSubmit={handleLogin}>
          <Stack margin={2} spacing={2}>
            <TextField
              name="loginEmail"
              label="Email address"
              type="email"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="password"
              label="Password"
              type="password"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            ></TextField>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Stack>
        </form>
        
          


  );
}

export default Login;
