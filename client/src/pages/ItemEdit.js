import React from 'react';

function ItemEdit() {
  return (
    <div>
      <h2>Add/Edit Items</h2>
      <div>
        <label>
          Expires on:
          <input type="text" value="February 12, 2022" />
        </label>
        <label>
          Added on:
          <input type="text" value="February 2, 2022" />
        </label>
        <label>
          Stored:
          <input type="text" value="February 12, 2022" />
        </label>
      </div>
      <div>
        <label>
          Expires on:
          <input type="text" />
        </label>
        <label>
          Added on:
          <input type="text" />
        </label>
        <label>
          Stored:
          <input type="text" />
        </label>
      </div>
    </div>
  );
}

export default ItemEdit;
