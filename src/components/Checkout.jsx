import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../config/firebaseconfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert('Por favor completá todos los campos del formulario.');
      return;
    }

    const order = {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email
      },
      items: cart.map(item => ({
        id: item.id,
        nombre: item.nombre || 'Producto sin nombre',
        precio: item.precio || 0,
        cantidad: item.cantidad || 1
      })),
      total: totalPrice() || 0,
      date: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      setOrderData(order); // Guardamos el detalle de la orden
      clearCart();
    } catch (error) {
      console.error('Error al generar la orden:', error);
      alert('Hubo un error al generar la orden. Verificá la consola.');
    }
  };

  if (orderId && orderData) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <h3>Detalle de la compra:</h3>
        <ul>
          {orderData.items.map((item) => (
            <li key={item.id}>
              {item.nombre} - {item.cantidad} x ${item.precio} = ${item.cantidad * item.precio}
            </li>
          ))}
        </ul>
        <p><strong>Total:</strong> ${orderData.total}</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return <div>Tu carrito está vacío.</div>;
  }

  return (
    <div>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit">Generar orden</button>
      </form>
    </div>
  );
};

export default Checkout;
