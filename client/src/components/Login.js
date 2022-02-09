import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Stack, TextField, Button, Typography } from '@mui/material';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';
import { validateEmail } from '../utils/helpers';

function Login() {
  const [login, { data }] = useMutation(LOGIN);
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState();

  let error = '';
  async function handleLogin(event) {
    event.preventDefault();

    if (!passwordError && !emailError) {
      try {
        const mutationResponse = await login({
          variables: { email: email, password: password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        setErrorDisplay(e);
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
            setErrorDisplay();
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
            setErrorDisplay();
          }}
          error={passwordError}
        />

        {errorDisplay && <Typography variant="p" color="error">{`${errorDisplay}`}</Typography>}

        <Button variant="contained" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default Login;
