import React, { useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';

import SingleItem from '../components/SingleItem';
import ItemEdit from '../components/ItemEdit';

function ItemList() {
  // Set which item will be edited in ItemEdit modal
  const [editedItem, setEditedItem] = useState({});

  // Turn edit modal on and off
  const [dialogOpen, setDialogOpen] = useState(false);

  // TODO replace test data with useQuery to pull in user's items
  const [itemData] = useState([
    {
      _id: 1,
      name: 'Apples',
      quantity: 3,
      unit: 'items',
      useByDate: '2022-02-22',
      addedDate: '2022-02-12',
      storageLocation: 'fridge',
    },
    {
      _id: 2,
      name: 'Ice Cream',
      quantity: 2,
      unit: '',
      useByDate: '2022-02-22',
      addedDate: '2022-02-12',
      storageLocation: 'freezer',
    },
    {
      _id: 3,
      name: 'Can of Green Beans',
      quantity: 6,
      unit: 'cup',
      useByDate: '2022-02-22',
      addedDate: '2022-02-12',
      storageLocation: 'pantry',
    },
  ]);

  // Add Item(s) button handler
  function handleAddItem() {
    // clear edited item
    setEditedItem({});
    // open modal
    setDialogOpen(true);
  }

  return (
    <Stack>
      <ItemEdit
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        setEditedItem={setEditedItem}
        editedItem={editedItem}
      />
      <Typography variant="h4">Item List</Typography>
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
