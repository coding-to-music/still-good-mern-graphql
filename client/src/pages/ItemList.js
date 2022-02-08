import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Stack, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SingleItem from '../components/SingleItem';
import ItemEdit from '../components/ItemEdit';

import { sortDate } from '../utils/helpers';
import { GET_ME } from '../utils/queries';

function ItemList() {
  // Pull in loggedIn user's data
  const { loading, data } = useQuery(GET_ME);
  let userData = [];
  if (data) {
    console.log(data);
    userData = sortDate(data?.me.savedItems);
  }
  useEffect(() => {}, [loading, data]);

  // Set which item will be edited in ItemEdit modal
  const [editedItem, setEditedItem] = useState({});

  // Turn edit modal on and off
  const [dialogOpen, setDialogOpen] = useState(false);

  // TODO replace test data with useQuery to pull in user's items
  // const [itemData] = useState(userData ? sortDate(userData) : '');

  // Add Item(s) button handler
  function handleAddItem() {
    // clear edited item
    setEditedItem({});
    // open modal
    setDialogOpen(true);
  }

  // Display message while data is loading
  if (loading) return <Typography variant="h4">Loading</Typography>;

  // Main render
  return (
    <>
      <Stack margin={2} marginBottom={10} alignItems="center">
        <ItemEdit
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          setEditedItem={setEditedItem}
          editedItem={editedItem}
        />
        <Typography variant="h5">My Goods</Typography>

        {/* Sort item array on render */}
        {console.log()}

        {/* Map items into cards */}
        {userData ? (
          userData.map(item => {
            return (
              <SingleItem setEditedItem={setEditedItem} setDialogOpen={setDialogOpen} item={item} key={item._id} />
            );
          })
        ) : (
          <Typography variant="h4">Add some goods!</Typography>
        )}
      </Stack>
      <Fab
        onClick={handleAddItem}
        color="primary"
        aria-label="add"
        sx={{
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default ItemList;
