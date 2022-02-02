import React from 'react';
import { Button } from '@mui/material';

function Welcome() {
  return (
    <div>
      <h2>Welcome to StillGood</h2>
      <p>
        Don't waste money letting your perishables expire. Use StillGood to keep track of what's in your kitchen,
        pantry, and medicine cabinet. Help plan your meals by picking the ingredients you already own, while they're
        Still Good. Don't let food get old enough to throw away.
      </p>

      <Button variant="contained" href="/login">
        Login or Sign up to start today
      </Button>
    </div>
  );
}

export default Welcome;
