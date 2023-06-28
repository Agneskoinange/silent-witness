import React from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <TextField placeholder="Username" type="text" />
      <br />
      <TextField placeholder="Password" type="password" />
      <br />
      <FormControlLabel control={<Checkbox />} label="Remember me" />
      <br />
      <Button variant="contained" color="primary">Sign In</Button>
      <br />
      <Button color="primary">Forgot password?</Button>
      <br />
      <Button variant="contained" color="secondary">Sign in with MetaMask</Button>
    </div>
  );
}
