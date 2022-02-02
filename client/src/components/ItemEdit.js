import React from 'react';
import { Button, ButtonGroup, Dialog, DialogTitle, MenuItem, Select, Stack, TextField } from '@mui/material';

function ItemEdit({ dialogOpen, setEditedItem, editedItem, setDialogOpen }) {
  // TODO Generic onChange handler
  function editField() {}

  // TODO Submit button handler
  function handleFormSubmit() {}
  // TODO Submit and add button handler
  function handleSubmitAndAdd() {}

  // Cancel button handler
  function handleEditCancel() {
    setEditedItem({});
    setDialogOpen(false);
  }

  function handleClose() {}
  return (
    <Dialog onClose={handleClose} open={dialogOpen}>
      <DialogTitle>Add/Edit Items</DialogTitle>
      <form onSubmit={handleFormSubmit}>
        <Stack margin={2} spacing={2}>
          <TextField
            value={editedItem.name}
            size="small"
            label="Item"
            type="text"
            // value={item.name}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />
          <TextField
            value={editedItem.quantity}
            size="small"
            label="Quantity"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />
          <TextField
            value={editedItem.useByDate}
            size="small"
            label="Use by"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />
          <TextField
            value={editedItem.addedDate}
            size="small"
            label="Added on"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />
          {/* TODO resolve controlled/uncontrolled object error */}
          <Select label="Stored where" size="small" value={editedItem.storageLocation} onChange={editField}>
            <MenuItem value="fridge">Fridge</MenuItem>
            <MenuItem value="freezer">Freezer</MenuItem>
            <MenuItem value="pantry">Pantry</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          <ButtonGroup>
            <Button onClick={handleFormSubmit}>Submit</Button>
            <Button onClick={handleSubmitAndAdd}>Submit and Add</Button>
            <Button onClick={handleEditCancel}>Cancel</Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Dialog>
  );
}

export default ItemEdit;
