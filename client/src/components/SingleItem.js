import React from 'react';
import { Paper, Typography, Grid, ButtonGroup, Button, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

function SingleItem({ item, setDialogOpen, setEditedItem }) {
  // Edit item button handler
  function handleEditItem() {
    // Set item to be edited in modal
    setEditedItem(item);
    // Open edit modal
    setDialogOpen(true);
  }

  // TODO Delete button handler

  // TODO recipe search handler ??

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, marginBottom: 0.5, maxWidth: 500, flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={10} alignItems="flex-start" container direction="column">
            <Typography gutterBottom variant="subtitle1" component="div" textAlign="left">
              {item.name}
            </Typography>

            <Typography variant="body2" gutterBottom>
              Expires on: {item.useByDate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stored: {item.storageLocation}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <ButtonGroup variant="contained" orientation="vertical" size="small">
              <Tooltip title="Edit" placement="left">
                <Button onClick={handleEditItem}>
                  <EditIcon />
                </Button>
              </Tooltip>

              <Tooltip title="Delete" placement="left">
                <Button>
                  <DeleteIcon />
                </Button>
              </Tooltip>

              <Tooltip title="Find Recipie" placement="left">
                <Button>
                  <DinnerDiningIcon />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default SingleItem;
