import { useState } from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Importamos los estilos externos

function NavBar() {
    const [cartVisible, setCartVisible] = useState(false);

    const handleNavClick = (category) => {
        console.log(`Navegando a: ${category}`);
        alert(`Navegando a: ${category}`);
    };

    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    return (
        <nav className="navbar">
            <h1 onClick={() => handleNavClick('Inicio')}>Mi Tienda</h1>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink></li>
                <li><NavLink to="/categoria/limpieza" className={({ isActive }) => isActive ? "active" : ""}>Limpieza</NavLink></li>
                <li><NavLink to="/categoria/accesorios" className={({ isActive }) => isActive ? "active" : ""}>Accesorios</NavLink></li>
                <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink></li>
            </ul>

            <div className="cart-button" onClick={toggleCart}>
                <CartWidget />
            </div>

            {cartVisible && (
                <div className="cart-popup">
                    <h3>¡Tu carrito!</h3>
                    <p>El carrito está vacío por ahora.</p>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
