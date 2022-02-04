const db = require('../config/connection');
const { Item, User } = require('../models');
const { faker } = require('@faker-js/faker');
db.once('open', async () => {
  await Item.deleteMany();
  await User.deleteMany();
  const userData = [];
  userData.push({email: "email@email.com",password: "password"});
  for (let i = 0; i < 50; i += 1) {
    const email = faker.internet.email();
    const password = faker.internet.password();
    
    userData.push({email, password});
  }

  const createdUsers = await User.collection.insertMany(userData);
  const createdItems = []
  for (let i = 0; i < 150; i += 1) {

    
    createdItems.push({});
  }
  process.exit();
});
