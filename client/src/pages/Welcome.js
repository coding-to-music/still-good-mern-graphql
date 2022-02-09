import React, { useState } from 'react';
import { Stack, Typography, Tab, Tabs, Box } from '@mui/material';
import '../App.css';

import Login from '../components/Login';
import Signup from '../components/Signup';
import AuthService from '../utils/auth';
function Welcome() {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, newValue) {
    setSelectedTab(newValue);
  }
  if (AuthService.loggedIn()) {
    window.location.assign("/itemList");
  }
  return (
    <Stack className={'welcome-stack'} maxWidth={900} margin="auto">
      <Typography variant="h4">Welcome to StillGood</Typography>
      <Typography variant="p">
        Don't waste money letting your perishables expire. Use StillGood to keep track of what's in your kitchen,
        pantry, and medicine cabinet. Help plan your meals by picking the ingredients you already own, while they're
        Still Good. Don't let food get old enough to throw away.
      </Typography>

      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Sign Up" />
      </Tabs>
      <Box className="credential-box">
        {selectedTab === 0 && <Login />}
        {selectedTab === 1 && <Signup />}
      </Box>
    </Stack>
  );
}

export default Welcome;
