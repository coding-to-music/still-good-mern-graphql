const mongoose = require('mongoose');
const { Schema } = mongoose;
const dayjs = require('dayjs');

const itemSchema = new Schema({
  categories: [
    {
      type: String,
      trim: true,
    },
  ],
  storageLocation: {
    type: String,
    trim: true,
  },
  addedDate: {
    type: String,
    default: dayjs().format('MM/DD/YY'),
  },
  useByDate: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
