import React, { useState } from 'react';
import { Button, ButtonGroup, Dialog, DialogTitle, MenuItem, Tooltip, Select, Stack, TextField } from '@mui/material';
import { Transition } from '../transitions/Transition';
import TaskAlt from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DoDisturb from '@mui/icons-material/DoDisturb';
import dayjs from 'dayjs';
import AuthService from '../utils/auth';
function ItemEdit({ dialogOpen, setEditedItem, editedItem, setDialogOpen, saveItem, updateItem }) {
  // Check whether adding or updating item
  if (!AuthService.loggedIn()) {
    window.location.assign("/");
  }
  let isNewItem;
  !editedItem._id ? (isNewItem = true) : (isNewItem = false);

  // Generic onChange handler
  function editField(event) {
    const { name, value } = event.target;
    setEditedItem({
      ...editedItem,
      [name]: value,
    });
  }

  // Item state for item name and useByDate
  const [itemNameError, setItemNameError] = useState(false);
  const [useByDateError, setUseByDateError] = useState(false);

  function submitItemData() {
    // reset validation errors
    setItemNameError(false);
    setUseByDateError(false);
    // Show error if no name entered
    if (!editedItem.name) {
      setItemNameError(true);
    }
    // Show error if no useByDate entered
    if (!editedItem.useByDate) {
      setUseByDateError(true);
    }

    // If required fields are entered send data and reset form
    if (editedItem.name && editedItem.useByDate) {
      // change quantity from string to int
      if (editedItem.quantity) {
        editedItem.quantity = parseInt(editedItem.quantity);
      }

      // choose mutation based on isNewItem flag
      if (isNewItem) {
        saveItem({ variables: { input: editedItem } });
      } else {
        updateItem({ variables: { input: editedItem } });
      }
      return true;
      // clear edited
    }
    return false;
  }

  // Submit item handler
  const handleSubmitItem = event => {
    event.preventDefault();

    if (submitItemData()) {
      setEditedItem({});
      setDialogOpen(false);
    }
  };

  // Submit item and add handler
  const handleSubmitItemAndAdd = event => {
    event.preventDefault();

    if (submitItemData()) {
      setDialogOpen(false);
      setEditedItem({});
      setDialogOpen(true);
    }
  };

  // Cancel button handler
  function handleEditCancel() {
    // reset validation errors
    setItemNameError(false);
    setUseByDateError(false);
    setDialogOpen(false);
  }

  function handleClose() {
    setDialogOpen(false);
  }

  return (
    <Dialog onClose={handleClose} open={dialogOpen} TransitionComponent={Transition}>
      <DialogTitle>Add/Edit Items</DialogTitle>
      <form noValidate autoComplete="off" onSubmit={handleSubmitItem}>
        <Stack margin={2} spacing={2}>
          {/* Name Field */}
          <TextField
            name="name"
            defaultValue={editedItem.name}
            size="small"
            label="Item"
            type="text"
            required
            error={itemNameError}
            onChange={e => editField(e)}
          />

          {/* Quantity Field */}
          <TextField
            name="quantity"
            defaultValue={editedItem.quantity}
            size="small"
            label="Quantity"
            type="number"
            onChange={e => editField(e)}
          />

          {/* Use By Field */}
          <TextField
            name="useByDate"
            defaultValue={editedItem.useByDate}
            size="small"
            label="Use by"
            type="date"
            required
            error={useByDateError}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => editField(e)}
          />

          {/* Added On Field */}
          <TextField
            name="addedDate"
            defaultValue={editedItem.addedDate || dayjs().format('YYYY-MM-DD')}
            size="small"
            label="Added on"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => editField(e)}
          />

          {/* Storage Location Selector */}
          <Select
            name="storageLocation"
            label="Stored where"
            size="small"
            color="primary"
            value={editedItem.storageLocation ? editedItem.storageLocation : ''}
            onChange={e => editField(e)}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Fridge">Fridge</MenuItem>
            <MenuItem value="Freezer">Freezer</MenuItem>
            <MenuItem value="Pantry">Pantry</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>

          {/* Buttons */}
          <ButtonGroup variant="contained" fullWidth={true}>
            <Tooltip title="Submit" placement="top">
              <Button onClick={handleSubmitItem}>
                <TaskAlt />
              </Button>
            </Tooltip>
            <Tooltip title="Submit and Add" placement="top">
              <Button onClick={handleSubmitItemAndAdd}>
                <AddTaskIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Cancel" placement="top">
              <Button onClick={handleEditCancel}>
                <DoDisturb />
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Stack>
      </form>
    </Dialog>
  );
}

export default ItemEdit;
