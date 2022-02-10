const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

//assign express to 'app'
const app = express();

// start Apollo server

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

//check if production env 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// Special rule for service worker
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "service-worker.js"));
});
// catch any other req's send to homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
