import React from 'react';
import { Button, ButtonGroup, MenuItem, Select, Stack, TextField } from '@mui/material';

function ItemEdit() {
  function editField() {}
  function handleFormSubmit() {}
  const storageOptions = ['fridge', 'freezer', 'pantry', 'counter', 'add option'];
  return (
    <>
      <h2>Add/Edit Items</h2>
      <form onSubmit={handleFormSubmit}>
        <Stack margin={2} spacing={2}>
          <TextField
            size="small"
            label="Item"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />
          <TextField
            size="small"
            label="Quantity"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            size="small"
            label="Use by"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />

          <TextField
            size="small"
            label="Added on"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />

          <Select label="Stored where" size="small" onChange={editField}>
            {storageOptions.map(option => {
              return <MenuItem key={option}>{option}</MenuItem>;
            })}
          </Select>
          <ButtonGroup>
            <Button>Submit</Button>
            <Button>Submit and Add</Button>
            <Button href="/itemlist">Cancel</Button>
          </ButtonGroup>
        </Stack>
      </form>
    </>
  );
}

export default ItemEdit;
