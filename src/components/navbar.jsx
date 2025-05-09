import { useState, useContext } from 'react';
import CartWidget from './cartwidget';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './navbar.css';

function NavBar() {
    const [cartVisible, setCartVisible] = useState(false);
    const { cart, totalPrice } = useContext(CartContext);

    const handleNavClick = (category) => {
        console.log(`Navegando a: ${category}`);
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
                    {cart.length === 0 ? (
                        <p>El carrito está vacío por ahora.</p>
                    ) : (
                        <div>
                            {cart.map(item => (
                                <div key={item.id}>
                                    <p>{item.nombre} x {item.quantity}</p>
                                </div>
                            ))}
                            <h4>Total: ${totalPrice() || 0}</h4>
                            <Link to="/checkout">
                                <button onClick={() => setCartVisible(false)}>Finalizar compra</button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}

export default NavBar;
