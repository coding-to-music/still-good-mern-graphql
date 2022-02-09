import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Stack, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SingleItem from '../components/SingleItem';
import ItemEdit from '../components/ItemEdit';

import { sortDate } from '../utils/helpers';
import { GET_ME } from '../utils/queries';
import { SAVE_ITEM, UPDATE_ITEM, REMOVE_ITEM } from '../utils/mutations';

function ItemList() {
  // Pull in loggedIn user's data
  const { loading, data } = useQuery(GET_ME);
  const [saveItem] = useMutation(SAVE_ITEM, { refetchQueries: [{ query: GET_ME }] });
  const [updateItem] = useMutation(UPDATE_ITEM, { refetchQueries: [{ query: GET_ME }] });
  const [deleteItem] = useMutation(REMOVE_ITEM, { refetchQueries: [{ query: GET_ME }] });

  const [itemData, setItemData] = useState([]);

  // Turn edit modal on and off
  const [dialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    setItemData(data?.me.savedItems);
  }, [itemData, data]);

  // Set which item will be edited in ItemEdit modal
  const [editedItem, setEditedItem] = useState({});

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
          itemData={itemData}
          setItemData={setItemData}
          saveItem={saveItem}
          updateItem={updateItem}
        />
        <Typography variant="h5">My Goods</Typography>

        {/* Map items into cards */}
        {itemData ? (
          sortDate(itemData).map(item => {
            if (item._id) {
              return (
                <SingleItem
                  setEditedItem={setEditedItem}
                  setDialogOpen={setDialogOpen}
                  deleteItem={deleteItem}
                  item={item}
                  key={item._id}
                />
              );
            }
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
