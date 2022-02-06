import React, { useState } from 'react';

import { Stack, TextField, Button } from '@mui/material';
import Auth from '../utils/auth';


function Login() {
   
  const [formState, setformState] = useState({

    signupUsername: '',
    signupEmail: '',
    signupPassword: '',
    signupPasswordConfirm: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false)

  function checkPasswordMatch() {
    if (formState.signupPassword !== formState.signupPasswordConfirm) {
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

  function handleSignup(event) {
    event.preventDefault();
  }
  return (
     
        <form id="signup-form" onSubmit={handleSignup}>
          <Stack margin={2} spacing={2}>
            <TextField
              name="signupUsername"
              label="Username"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="signupEmail"
              label="Email address"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="signupPassword"
              label="Password"
              size="small"
              type="password"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="signupPasswordConfirm"
              label="Confirm password"
              size="small"
              type="password"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
              onBlur={checkPasswordMatch}
              error={passwordMatchError}
            ></TextField>
            <Button variant="contained" type="submit">
              Sign up
            </Button>
          </Stack>
        </form>
  );
}

export default Login;
