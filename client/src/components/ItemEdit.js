import React from 'react';
import { Button, ButtonGroup, Dialog, DialogTitle, Grid, MenuItem, Select, Stack, TextField } from '@mui/material';
import TaskAlt from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DoDisturb from '@mui/icons-material/DoDisturb';

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
          {/* Name Field */}
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

          <Grid container>
            <Grid item xs={7}>
              {/* Quantity Field */}
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
            </Grid>
            <Grid item xs={5}>
              {/* Unit Field */}
              <TextField
                value={editedItem.unit}
                size="small"
                label="Unit"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={editField}
              />
            </Grid>
          </Grid>
          {/* Use By Field */}
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

          {/* Added On Field */}
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

          {/* Storage Location Selector */}
          {/* TODO resolve controlled/uncontrolled object error */}
          <Select label="Stored where" size="small" value={editedItem.storageLocation} onChange={editField}>
            <MenuItem value="fridge">Fridge</MenuItem>
            <MenuItem value="freezer">Freezer</MenuItem>
            <MenuItem value="pantry">Pantry</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>

          {/* Buttons */}
          <ButtonGroup variant="contained" fullWidth={true}>
            <Button onClick={handleFormSubmit}>
              <TaskAlt />
            </Button>
            <Button onClick={handleSubmitAndAdd}>
              <AddTaskIcon />
            </Button>
            <Button onClick={handleEditCancel}>
              <DoDisturb />
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Dialog>
  );
}

export default ItemEdit;
