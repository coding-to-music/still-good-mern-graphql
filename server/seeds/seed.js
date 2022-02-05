const db = require('../config/connection');
const { Item, User } = require('../models');
const { faker } = require('@faker-js/faker');
const fs = require('fs');
const foods = require('./foods.json').foods;

faker.seed(1123123123123123123123);
db.once('open', async () => {
  await Item.deleteMany();
  await User.deleteMany();
  var data = [];
  for (let i = 0; i < 50; i += 1) {
    const email = faker.internet.email();
    const password = faker.internet.password();
    
    data.push({email, password});
  }

  const createdItems = []

  
  for (let i = 0; i < 150; i += 1) {
    
    createdItems.push({});
  }
  process.exit();
});
