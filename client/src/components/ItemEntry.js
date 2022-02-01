import React from 'react';
import { Link } from 'react-router-dom';

function ItemEntry() {
  return (
    <div>
      <h4>Apples</h4>
      <p>Expires on: 'February 12, 2022</p>
      <p>Added on: 'February 2, 2022</p>
      <p>Stored: Counter</p>
      <Link to="/itemedit">Edit</Link>
      <button>Delete</button>
    </div>
  );
}

export default ItemEntry;
