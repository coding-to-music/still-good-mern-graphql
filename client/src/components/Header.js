import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h2>Header/Navbar section</h2>
      <Link to="/"> Welcome </Link>
      <Link to="/join"> Join </Link>
      <Link to="/itemlist"> ItemList </Link>
      <Link to="/itemedit"> ItemEdit </Link>
    </div>
  );
}
export default Header;
