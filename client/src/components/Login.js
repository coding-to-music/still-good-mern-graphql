import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Stack, TextField, Button, Box } from '@mui/material';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

function Login() {
  const [login] = useMutation(LOGIN);
  
  const [formState, setformState] = useState({
    loginEmail: '',
    loginPassword: '',
    signupUsername: '',
    signupEmail: '',
    signupPassword: '',
    signupPasswordConfirm: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false)

  function checkPasswordMatch() {
    if (formState.signupPassword != formState.signupPasswordConfirm) {
      setPasswordMatchError(true)
    } else {
      setPasswordMatchError(false)
    }
  }

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
  function handleSignup(event) {
    event.preventDefault();
  }
  return (
    <>
      <Box sx={{ backgroundColor: 'lightblue', margin: 'auto', padding: 1, borderRadius: 3, maxWidth: 500 }}>
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
              name="loginPassword"
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
        
          
      </Box>
    </>
  );
}

export default Login;
