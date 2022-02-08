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

        {Auth.loggedIn() && (
          <>
            <MenuItem component={Link} to="/itemlist" margin={3}>
              ItemList
            </MenuItem>
            <MenuItem component={Link} to="/" onClick={Auth.logout}>
              Logout
            </MenuItem>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
