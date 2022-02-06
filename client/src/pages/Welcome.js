import React, {useState} from 'react';
import { Tab, Tabs } from '@mui/material';

import Login from '../components/Login'
import Signup from '../components/Signup'

function Welcome() {
  const [selectedTab, setSelectedTab] = useState(0)

  function handleTabChange(event, newValue) {
    setSelectedTab(newValue)
  }
  return (
    <>
      <h2>Welcome to StillGood</h2>
      <p>
        Don't waste money letting your perishables expire. Use StillGood to keep track of what's in your kitchen,
        pantry, and medicine cabinet. Help plan your meals by picking the ingredients you already own, while they're
        Still Good. Don't let food get old enough to throw away.
      </p>

<Tabs value={selectedTab} onChange={handleTabChange} centered>
    <Tab label='Login'/>
<Tab label='Sign Up' />
</Tabs>
{selectedTab === 0 && <Login/>}
{selectedTab === 1 && <Signup />}

    </>
  );
}

export default Welcome;
