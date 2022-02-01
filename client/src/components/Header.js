import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar>
      <Toolbar disableGutters={true}>
        <Typography variant="h4">StillGood</Typography>
        <MenuItem component={Link} to="/">
          Welcome
        </MenuItem>

        <MenuItem component={Link} to="/itemlist">
          ItemList
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
