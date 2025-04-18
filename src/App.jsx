import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemlistcontainer';
import ItemDetailContainer from './components/itemdetailcontainer';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
