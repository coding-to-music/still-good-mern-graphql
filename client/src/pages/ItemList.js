import React from 'react';
import { Stack, Typography, Button } from '@mui/material';

import SingleItem from '../components/SingleItem';

const sampleData = [
  {
    id: 1,
    name: 'Apples',
    dateExpires: '02/22/22',
    dateAdded: '02/12/22',
    storageLocation: 'Counter',
  },
  {
    id: 2,
    name: 'Ice Cream',
    dateExpires: '03/23/22',
    dateAdded: '02/12/22',
    storageLocation: 'Freezer',
  },
  {
    id: 3,
    name: 'Can of Green Beans',
    dateExpires: '07/10/24',
    dateAdded: '02/12/22',
    storageLocation: 'Pantry',
  },
];

function ItemList() {
  return (
    <Stack>
      <Typography variant="h4">Item List</Typography>
      {sampleData.map(item => {
        return <SingleItem item={item} key={item.id} />;
      })}
      <Button variant="contained">Add Items</Button>
    </Stack>
  );
}

export default ItemList;
