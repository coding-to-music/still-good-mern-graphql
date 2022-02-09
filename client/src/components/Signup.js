import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Stack, TextField, Button, Typography } from '@mui/material';
import { validateEmail } from '../utils/helpers';

function Signup() {
  let error = '';
  const [signup] = useMutation(ADD_USER);

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState();

  async function handleSignup(event) {
    event.preventDefault();

    if (!emailError && !passwordError) {
      try {
        const mutationResponse = await signup({
          variables: { email: email, password: password },
        });
        console.log(mutationResponse);
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      } catch (e) {
        setErrorDisplay(e);
      }
    }
  }
  return (
    <form id="signup-form" onSubmit={handleSignup}>
      <Stack margin={2} spacing={2}>
        <TextField
          name="signupEmail"
          label="Email address"
          size="small"
          type="text"
          required
          onChange={e => setEmail(e.target.value)}
          onBlur={e => {
            !e.target.value || !validateEmail(e.target.value) ? setEmailError(true) : setEmailError(false);
            setErrorDisplay();
          }}
          error={emailError}
        />
        <TextField
          name="signupPassword"
          label="Password"
          size="small"
          type="password"
          required
          onChange={e => setPassword(e.target.value)}
          onBlur={e => {
            !e.target.value ? setPasswordError(true) : setPasswordError(false);
            setErrorDisplay();
          }}
          error={passwordError}
        />

        {errorDisplay && <Typography variant="p" color="error">{`${errorDisplay}`}</Typography>}

        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </Stack>
    </form>
  );
}

export default Signup;
