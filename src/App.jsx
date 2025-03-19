import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />
        </div>
    );
}

export default App;
