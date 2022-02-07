import React, {useState} from 'react';
import {Stack, Typography, Tab, Tabs, Box } from '@mui/material';

import Login from '../components/Login'
import Signup from '../components/Signup'

function Welcome() {
  const [selectedTab, setSelectedTab] = useState(0)

  function handleTabChange(event, newValue) {
    setSelectedTab(newValue)
  }
  return (
    <Stack maxWidth={900} margin='auto'>
      <Typography variant='h4'>Welcome to StillGood</Typography>
      <Typography variant='p'>
        Don't waste money letting your perishables expire. Use StillGood to keep track of what's in your kitchen,
        pantry, and medicine cabinet. Help plan your meals by picking the ingredients you already own, while they're
        Still Good. Don't let food get old enough to throw away.
      </Typography>

<Tabs value={selectedTab} onChange={handleTabChange} centered>
    <Tab label='Login'/>
<Tab label='Sign Up' />
</Tabs>
<Box sx={{ backgroundColor: 'lightblue', padding: 1, borderRadius: 3, maxWidth: 900 }}>
{selectedTab === 0 && <Login/>}
{selectedTab === 1 && <Signup />}
</Box>
    </Stack>
  );
}

export default Welcome;
