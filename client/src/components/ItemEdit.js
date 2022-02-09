import React, { useState, forceUpdate } from 'react';
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
// import { UPDATE_ITEM } from '../utils/mutations';

function ItemEdit({
  dialogOpen,
  setEditedItem,
  editedItem,
  setDialogOpen,
  itemData,
  setItemData,
  saveItem,
  updateItem,
}) {
  // Check whether adding or updating item
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

  async function submitItemData() {
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
      if(editedItem.quantity) {
        editedItem.quantity = parseInt(editedItem.quantity);
      }
      if (isNewItem) {
        const { data } = await saveItem({ variables: { input: editedItem } });
      } else {
        const { data } = await updateItem({ variables: { input: editedItem } });
      }
      // setItemData([...itemData, data.saveItem]);

      // clear edited
      setEditedItem({});
    }
  }

  // Submit item handler
  const handleSubmitItem = event => {
    event.preventDefault();

    submitItemData();
    setDialogOpen(false);
  };

  // Submit item and add handler
  const handleSubmitItemAndAdd = event => {
    event.preventDefault();

    submitItemData();
    setDialogOpen(true);
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
    <Dialog onClose={handleClose} open={dialogOpen}>
      <DialogTitle>Add/Edit Items</DialogTitle>
      <form noValidate autoComplete="off">
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

          <Grid container>
            <Grid item xs={7}>
              {/* Quantity Field */}
              <TextField
                name="quantity"
                defaultValue={editedItem.quantity}
                size="small"
                label="Quantity"
                type="number"
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
            color="primary"
            value={editedItem.storageLocation ? editedItem.storageLocation : ''}
            onChange={e => editField(e)}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="fridge">Fridge</MenuItem>
            <MenuItem value="freezer">Freezer</MenuItem>
            <MenuItem value="pantry">Pantry</MenuItem>
            <MenuItem value="other">Other</MenuItem>
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
