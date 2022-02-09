import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Welcome from './pages/Welcome';
import AuthService from "./utils/auth";
import ItemList from './pages/ItemList';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })

});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/itemlist" element={<ItemList />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
