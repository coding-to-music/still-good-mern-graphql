import './App.css';

import Header from './components/Header';
import Welcome from './pages/Welcome';
import Join from './pages/Join';
import ItemList from './pages/ItemList';
import ItemEdit from './pages/ItemEdit';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Join />
      <ItemList />
      <ItemEdit />
    </div>
  );
}

export default App;
