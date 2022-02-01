import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem } from '@mui/material';

function Header() {
  return (
    <AppBar>
      <h2>StillGood</h2>
      <Toolbar disableGutters="true">
        <MenuItem component={Link} to="/">
          Welcome
        </MenuItem>
        <MenuItem component={Link} to="/join">
          Join
        </MenuItem>
        <MenuItem component={Link} to="/itemlist">
          ItemList
        </MenuItem>
        <MenuItem component={Link} to="/itemedit">
          ItemEdit
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
