const mongoose = require("mongoose");
// require("dotenv").config();

require("dotenv").config({
  path: "/.env",
});

// import * as dotenv from "dotenv";
// dotenv.config();

//needs DB name
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/still-good-mern-graphql",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false
//   }
// );

const mongoUri = process.env.MONGODB_URI;

console.log(mongoUri);

// console.log(process.env);

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

module.exports = mongoose.connection;
