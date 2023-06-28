import React from 'react';
import { Button, TextField } from '@mui/material';

export default function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <TextField placeholder="Set username" type="text" />
      <br />
      <TextField placeholder="Set password" type="password" />
      <br />
      <TextField placeholder="Set recovery email" type="email" />
      <br />
      <Button variant="contained" color="primary">Sign Up</Button>
    </div>
  );
}
