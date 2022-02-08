import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogTitle,
  Grid,
  MenuItem,
  Tooltip,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import TaskAlt from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DoDisturb from '@mui/icons-material/DoDisturb';
import { useMutation } from '@apollo/client';
import { SAVE_ITEM } from '../utils/mutations';

function ItemEdit({ dialogOpen, setEditedItem, editedItem, setDialogOpen }) {
  const [saveItem] = useMutation(SAVE_ITEM);

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

  // Submit item handler
  const handleFormSubmit = event => {
    event.preventDefault();

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
      // reset validation errors
      setItemNameError(false);
      setUseByDateError(false);
      console.log(editedItem);
      saveItem({ variables: { input: editedItem } });
      // TODO check if mutation was successful and then reset edited item to nothing and close the modal

      // clear edited
      setEditedItem({});

      setDialogOpen(false);
    }
  };
  // TODO Submit and add button handler
  // TODO suggest refactoring out check and submit function to use for both buttons
  function handleSubmitAndAdd() {
    setDialogOpen(false);
  }

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
    <Dialog onClose={handleClose} open={dialogOpen}>
      <DialogTitle>Add/Edit Items</DialogTitle>
      <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
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
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => editField(e)}
          />

          <Grid container>
            <Grid item xs={7}>
              {/* Quantity Field */}
              <TextField
                name="quantity"
                defaultValue={editedItem.quantity}
                size="small"
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => editField(e)}
              />
            </Grid>
            <Grid item xs={5}>
              {/* Unit Field */}
              {/*
      // TODO make this a select instead of a text field
      // TODO create select options
    */}
              <TextField
                name="unit"
                defaultValue={editedItem.unit}
                size="small"
                label="Unit"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => editField(e)}
              />
            </Grid>
          </Grid>
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
            defaultValue={editedItem.addedDate}
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
            value={editedItem.storageLocation ? editedItem.storageLocation : 'other'}
            onChange={e => editField(e)}
          >
            <MenuItem value="fridge">Fridge</MenuItem>
            <MenuItem value="freezer">Freezer</MenuItem>
            <MenuItem value="pantry">Pantry</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>

          {/* Buttons */}
          <ButtonGroup variant="contained" fullWidth={true}>
            <Tooltip title="Submit" placement="top">
              <Button onClick={handleFormSubmit}>
                <TaskAlt />
              </Button>
            </Tooltip>
            <Tooltip title="Submit and Add" placement="top">
              <Button onClick={handleSubmitAndAdd}>
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
