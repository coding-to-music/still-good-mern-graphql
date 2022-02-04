const db = require('./connection');
const { User, Item, StorageLocation } = require('../models');

db.once('open', async () => {
    await storageLocation.deleteMany();

    const storagelocation = await storageLocation.insertMany([
        { name: 'Fridge' },
        { name: 'Freezer' },
        { name: 'Pantry' },
        { name: 'Other' }
    ]);
    console.log('storageLocation seeded');

    await Item.deleteMany();

    const item = await Item.insertMany([
        {
            categories: 'Dry Food',
            dateAdded: "12-21-1999",
            expirationDate: "12-31-9999",
            name: "Twinky",
            quantity: 100
        },
        {
            categories: 'Essential to life',
            dateAdded: "2-3-2022",
            expirationDate: "2-27-2022",
            name: "Nestle Toll House Chocolate Chip Cookie Dough",
            quantity: 5
        },
        {
            categories: 'Veggies',
            dateAdded: "2-1-2022",
            expirationDate: "2-10-2022",
            name: "Pre-Made Salad",
            quantity: 2
        },
        {
            categories: 'Dry Food',
            dateAdded: "10-1-2021",
            expirationDate: "2-3-2022",
            name: "Flour",
            quantity: 1
        },
    ]);

    console.log('Item seeded');

    user = await User.deleteMany();

    const user = await User.insertMany([
        {
            username: 'FredBunchOfNumbers',
            email: "fredbon@freddy.com",
            password: "skittles",
            savedItems: 4
        },
        {
            username: 'NancyBunchOfNumbers',
            email: "Nancybon@Nancy.com",
            password: "clamchowder",
            savedItems: 4
        },
        {
            username: 'LittleMax',
            email: "LM@gmail.com",
            password: "bingo67",
            savedItems: 4
        },
        {
            username: 'RubyTuesday',
            email: "RT@yahoo.com",
            password: "dogsdonthavepasswords",
            savedItems: 4
        },
    ])

    console.log('User seeded');

    process.exit();
});
