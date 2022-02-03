import React, { useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';

import SingleItem from '../components/SingleItem';
import ItemEdit from '../components/ItemEdit';

// TODO replace test data with useQuery to pull in user's items
import { sampleData, sortItems } from '../utils/helpers';

function ItemList() {
  // Set which item will be edited in ItemEdit modal
  const [editedItem, setEditedItem] = useState({});

  // Turn edit modal on and off
  const [dialogOpen, setDialogOpen] = useState(false);

  // TODO replace test data with useQuery to pull in user's items
  const [itemData] = useState(sampleData);

  // Add Item(s) button handler
  function handleAddItem() {
    // clear edited item
    setEditedItem({});
    // open modal
    setDialogOpen(true);
  }

  return (
    <Stack margin={1}>
      <ItemEdit
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        setEditedItem={setEditedItem}
        editedItem={editedItem}
      />
      <Typography variant="h4">Item List</Typography>

      {/* Sort item array on render */}
      {itemData.sort((a, b) => {
        if (a.useByDate < b.useByDate) {
          return -1;
        }
        if (a.useByDate > b.useByDate) {
          return 1;
        }

        return 0;
      })}

      {/* Map items into cards */}
      {itemData.map(item => {
        return <SingleItem setEditedItem={setEditedItem} setDialogOpen={setDialogOpen} item={item} key={item._id} />;
      })}
      <Button onClick={handleAddItem} variant="contained">
        Add Item(s)
      </Button>
    </Stack>
  );
}

export default ItemList;
