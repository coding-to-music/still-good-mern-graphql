import React from 'react';
import { Button, ButtonGroup, Dialog, DialogTitle, MenuItem, Select, Stack, TextField } from '@mui/material';

function ItemEdit(props) {
  const { dialogOpen, editedItem, setDialogOpen } = props;
  console.log(dialogOpen, editedItem);
  function editField() {}
  function handleFormSubmit() {}
  function handleSubmitAndAdd() {}
  function handleEditCancel() {
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
            value={editedItem.dateExpires}
            size="small"
            label="Use by"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />

          <TextField
            value={editedItem.dateAdded}
            size="small"
            label="Added on"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={editField}
          />

          {/* <Select label="Stored where" size="small" onChange={editField}>
            {storageOptions.map(option => {
              return <MenuItem key={option}></MenuItem>;
            })}
          </Select> */}
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
