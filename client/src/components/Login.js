import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Stack, TextField, Button } from '@mui/material';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';
import { validateEmail } from '../utils/helpers';

function Login() {
  const [login, { data, error }] = useMutation(LOGIN);
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    if (!passwordError && !emailError) {
      try {
        const mutationResponse = await login({
          variables: { email: email, password: password },
        });
        console.log(mutationResponse);
        const token = mutationResponse.data.login.token;
        Auth.login(token);


      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <form noValidate autoComplete="off" id="login-form" onSubmit={handleLogin}>
      <Stack margin={2} spacing={2}>
        <TextField
          name="email"
          label="Email address"
          type="email"
          size="small"
          required
          onChange={e => setEmail(e.target.value)}
          onBlur={e => {
            !validateEmail(e.target.value) || !e.target.value ? setEmailError(true) : setEmailError(false);
          }}
          error={emailError}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          size="small"
          required
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
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default Login;
