import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Typography } from '@mui/material';
import Auth from '../utils/auth';

function Header() {
  return (
    <AppBar sx={{ px: 1 }}>
      <Toolbar disableGutters={true}>
        <Typography variant="h4" textAlign="left" sx={{ m: 2, flexGrow: 1 }}>
          StillGood
        </Typography>
        <MenuItem onClick={console.log(Auth.loggedIn())}>LoggedIn?</MenuItem>
        {Auth.loggedIn() ? (
          <>
            <MenuItem component={Link} to="/itemlist" margin={3}>
              ItemList
            </MenuItem>
            <MenuItem onClick={Auth.logout}>Logout</MenuItem>
          </>
        ) : (
          <MenuItem component={Link} to="/">
            Login
          </MenuItem>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
