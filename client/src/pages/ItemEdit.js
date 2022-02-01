import React from 'react';

function ItemEdit() {
  function editField() {}
  return (
    <div>
      <h2>Add/Edit Items</h2>
      <div>
        <label>
          Expires on:
          <input type="text" value="February 12, 2022" onChange={editField} />
        </label>
        <label>
          Added on:
          <input type="text" value="February 2, 2022" onChange={editField} />
        </label>
        <label>
          Stored:
          <input type="text" value="February 12, 2022" onChange={editField} />
        </label>
      </div>
      <div>
        <label>
          Expires on:
          <input type="text" onChange={editField} />
        </label>
        <label>
          Added on:
          <input type="text" onChange={editField} />
        </label>
        <label>
          Stored:
          <input type="text" onChange={editField} />
        </label>
      </div>
    </div>
  );
}

export default ItemEdit;
