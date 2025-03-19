import { useState } from 'react';  // Importamos useState para manejar el estado del carrito
import CartWidget from './CartWidget';  // Importamos el componente CartWidget

function NavBar() {
    const [cartVisible, setCartVisible] = useState(false);  // Estado para manejar la visibilidad del carrito

    const handleNavClick = (category) => {
        console.log(`Navegando a: ${category}`);
        alert(`Navegando a: ${category}`);
    };

    const toggleCart = () => {
        setCartVisible(!cartVisible);  // Cambia la visibilidad del carrito al hacer clic
    };

    return (
        <nav style={{
            position: 'fixed',  // Asegura que la barra de navegación quede fija en la parte superior
            top: 0,
            left: 0,
            width: '100%',
            padding: '1rem 2rem',  // Aumentamos el padding horizontal para más espacio
            backgroundColor: '#6200ea',
            color: '#fff',
            display: 'flex',
            justifyContent: 'flex-start',  // Alineamos todo a la izquierda
            alignItems: 'center',
            zIndex: 1000,  // Para que quede por encima de otros elementos
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',  // Sombra para mejorar el diseño
        }}>
            <h1 onClick={() => handleNavClick('Inicio')} style={{ cursor: 'pointer', margin: 0, marginRight: '2rem' }}>Mi Tienda</h1>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '1.5rem',  // Reducimos el espacio entre las opciones
                margin: 0
            }}>
                <li onClick={() => handleNavClick('Inicio')} style={{ cursor: 'pointer' }}>Inicio</li>
                <li onClick={() => handleNavClick('Productos')} style={{ cursor: 'pointer' }}>Productos</li>
                <li onClick={() => handleNavClick('Contacto')} style={{ cursor: 'pointer' }}>Contacto</li>
            </ul>

            {/* El carrito es ahora siempre visible y clickeable, posicionado en la esquina derecha */}
            <div 
                style={{
                    cursor: 'pointer',
                    position: 'fixed',  // Posición fija para que se quede en la esquina
                    top: '6%',  // Centrado verticalmente en la barra de navegación
                    right: '20px',  // 20px desde el borde derecho de la pantalla
                    transform: 'translateY(-50%)',  // Ajustamos para centrarlo exactamente
                    zIndex: 1001,  // Asegura que el carrito quede por encima del contenido
                }}
                onClick={toggleCart}
            >
                <CartWidget />
            </div>

            {/* Si el carrito está visible, muestra un mensaje adicional */}
            {cartVisible && (
                <div style={{
                    position: 'absolute',
                    top: '60px',  // Ajustamos para que esté debajo de la barra
                    right: '5%',  // Esto asegura que el contenido del carrito no se salga
                    backgroundColor: '#fff',
                    color: '#000',
                    padding: '1rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    width: '200px',
                }}>
                    <h3>¡Tu carrito!</h3>
                    <p>El carrito está vacío por ahora.</p>
                    {/* Aquí podrías agregar los productos del carrito más tarde */}
                </div>
            )}
        </nav>
    );
}

export default NavBar;
