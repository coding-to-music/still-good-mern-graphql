import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Stack, Typography, Fab, Button, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SingleItem from '../components/SingleItem';
import ItemEdit from '../components/ItemEdit';

import { sortDate } from '../utils/helpers';
import { GET_ME } from '../utils/queries';
import { SAVE_ITEM, UPDATE_ITEM, REMOVE_ITEM } from '../utils/mutations';

function ItemList() {
  const isXs = useMediaQuery('(max-width:900px)');
  // Pull in loggedIn user's data
  const { loading, data } = useQuery(GET_ME);
  const [saveItem] = useMutation(SAVE_ITEM, { refetchQueries: [{ query: GET_ME }] });
  const [updateItem] = useMutation(UPDATE_ITEM, { refetchQueries: [{ query: GET_ME }] });
  const [removeItem] = useMutation(REMOVE_ITEM, { refetchQueries: [{ query: GET_ME }] });

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
            return (
              item._id && (
                <SingleItem
                  setEditedItem={setEditedItem}
                  setDialogOpen={setDialogOpen}
                  removeItem={removeItem}
                  item={item}
                  key={item._id}
                />
              )
            );
          })
        ) : (
          <Typography variant="h4">Add some goods!</Typography>
        )}
        {isXs ? (
          <Fab
            onClick={handleAddItem}
            color="primary"
            aria-label="add"
            sx={{
              right: 20,
              bottom: 23,
              position: 'fixed',
            }}
          >
            <AddIcon />
          </Fab>
        ) : (
          <Button
            variant="contained"
            display="fluid"
            fullWidth
            onClick={handleAddItem}
            sx={{ position: 'fixed', width: '900px', bottom: 40 }}
          >
            Add Good(s)
          </Button>
        )}
      </Stack>
    </>
  );
}

export default ItemList;
