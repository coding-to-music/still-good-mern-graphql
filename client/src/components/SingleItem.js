import React from 'react';
import { Link, Paper, Typography, Grid, ButtonGroup, Button, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

function SingleItem({ item }) {
  return (
    <Paper variant="outlined" sx={{ p: 2, margin: '2px', maxWidth: 500, flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={10} alignItems="flex-start" container direction="column">
          <Typography gutterBottom variant="subtitle1" component="div" textAlign="left">
            {item.name}
          </Typography>

          <Typography variant="body2" gutterBottom>
            Expires on: {item.dateExpires}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stored: {item.storageLocation}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <ButtonGroup variant="contained" orientation="vertical" size="small">
            <Tooltip title="Edit" placement="left">
              <Button element={Link} to={{ pathname: '/itemedit', state: { item } }}>
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
  );
}

export default SingleItem;
