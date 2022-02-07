import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Stack, TextField, Button } from '@mui/material';

function Signup() {
  const [signup, { error }] = useMutation(ADD_USER);

  const [formState, setformState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);

  function checkPasswordMatch() {
    if (formState.signupPassword !== formState.signupPasswordConfirm) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  }

  async function handleChange(event) {
    const { name, value } = event.target;
    setformState({
      ...formState,
      [name]: value,
    });
  }

  async function handleSignup(event) {
    event.preventDefault();
    try {
      const mutationResponse = await signup({
        variables: { email: formState.email, password: formState.password, username: formState.username },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </Stack>
    </form>
  );
}

export default Signup;
