import React from 'react';
import { Typography, Link } from '@mui/material';

function NoMatch() {
  return (
    <>
      <Typography variant="h3">Not a page.</Typography>
      <Typography variant="h4">
        You don't have to go <Link href="/">home</Link>, but you can't stay here.
      </Typography>
    </>
  );
}

export default NoMatch;
