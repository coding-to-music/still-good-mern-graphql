import dayJs from 'dayjs'
const addedDate = '2022-02-12'
const setUseByDate = (dayChangeAmount) => {
  return dayJs().add(dayChangeAmount, 'day').format('YYYY-MM-DD')
}

export const sampleData = [
  {
    _id: 1,
    name: 'Apples',
    quantity: 3,
    unit: 'items',
    useByDate: setUseByDate(-1),
    addedDate: addedDate,
    storageLocation: 'fridge',
  },
  {
    _id: 2,
    name: 'Ice Cream',
    quantity: 2,
    unit: '',
    useByDate: setUseByDate(0),
    addedDate: addedDate,
    storageLocation: 'freezer',
  },
  {
    _id: 3,
    name: 'Can of Green Beans',
    quantity: 6,
    unit: 'cup',
    useByDate: setUseByDate(1),
    addedDate: addedDate,
    storageLocation: 'pantry',
  },
  {
    _id: 4,
    name: 'Bread',
    quantity: 10,
    unit: 'slices',
    useByDate: setUseByDate(2),
    addedDate: addedDate,
    storageLocation: 'pantry',
  },
  {
    _id: 5,
    name: 'Milk',
    quantity: 1,
    unit: 'quart',
    useByDate: setUseByDate(3),
    addedDate: addedDate,
    storageLocation: 'fridge',
  },
  {
    _id: 6,
    name: 'Lettuce',
    quantity: '',
    unit: '',
    useByDate: setUseByDate(4),
    addedDate: addedDate,
    storageLocation: 'fridge',
  },
];
