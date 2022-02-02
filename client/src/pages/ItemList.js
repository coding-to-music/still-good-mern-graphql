import React, { useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';

import SingleItem from '../components/SingleItem';
import ItemEdit from '../components/ItemEdit';

function ItemList() {
  function handleAddItem() {
    setEditedItem({});
    setDialogOpen(true);
  }
  const [dialogOpen, setDialogOpen] = useState(false);
  const [itemData, setItemData] = useState([
    {
      id: 1,
      name: 'Apples',
      quantity: 3,
      units: 'items',
      dateExpires: '2022-02-22',
      dateAdded: '2022-02-12',
      storageLocation: 'Counter',
    },
    {
      id: 2,
      name: 'Ice Cream',
      dateExpires: '03/23/22',
      quantity: 2,
      dateExpires: '2022-02-22',
      dateAdded: '2022-02-12',
      storageLocation: 'Freezer',
    },
    {
      id: 3,
      name: 'Can of Green Beans',
      quantity: 6,
      units: 'items',
      dateExpires: '2022-02-22',
      dateAdded: '2022-02-12',
      storageLocation: 'Pantry',
    },
  ]);
  const [editedItem, setEditedItem] = useState({});

  return (
    <Stack>
      <ItemEdit dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} editedItem={editedItem} />
      <Typography variant="h4">Item List</Typography>
      {itemData.map(item => {
        return <SingleItem setEditedItem={setEditedItem} setDialogOpen={setDialogOpen} item={item} key={item.id} />;
      })}
      <Button onClick={handleAddItem} variant="contained">
        Add Items
      </Button>
    </Stack>
  );
}

export default ItemList;
