import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Stack, TextField, Button } from '@mui/material';
import { validateEmail } from '../utils/helpers';

function Signup() {
  const [signup, { error }] = useMutation(ADD_USER);

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState(false);

  async function handleSignup(event) {
    event.preventDefault();

    if (!emailError && !passwordError) {
      try {
        const mutationResponse = await signup({
          variables: { email: email, password: password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
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
          onChange={e => setEmail(e.target.value)}
          onBlur={e => {
            !e.target.value || !validateEmail(e.target.value) ? setEmailError(true) : setEmailError(false);
          }}
          error={emailError}
        />
        <TextField
          name="signupPassword"
          label="Password"
          size="small"
          type="password"
          onChange={e => setPassword(e.target.value)}
          onBlur={e => {
            !e.target.value ? setPasswordError(true) : setPasswordError(false);
          }}
          error={passwordError}
        />
        {/* 
        //TODO display login error
        {error && <Typography variant="h4">{error}</Typography>} */}
        {/* {data && <Typography variant="h4">{data}</Typography>} */}
        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </Stack>
    </form>
  );
}

export default Signup;
