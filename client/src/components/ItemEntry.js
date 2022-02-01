import React from 'react';
import { Paper, Typography, Grid, ButtonGroup, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ItemEntry({ item }) {
  return (
    <Paper variant="outlined" sx={{ p: 2, margin: '2px', maxWidth: 500, flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={10} alignItems="flex-start" container direction="column">
          <Typography gutterBottom variant="subtitle1" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Expires on: {item.dateExpires}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Added: {item.dateAdded}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stored: {item.storageLocation}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <ButtonGroup variant="contained" orientation="vertical">
            <Button href="/itemedit">
              <EditIcon />
            </Button>
            <Button>
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ItemEntry;
