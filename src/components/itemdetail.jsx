import React, { useState, useContext } from 'react';
import ItemCount from './itemcount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div style={{ marginTop: '80px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>{producto.nombre}</h2>

      {producto.imagen ? (
        <img src={producto.imagen} alt={producto.nombre} style={{ width: '150px' }} />
      ) : (
        <p>Imagen no disponible</p>
      )}

      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>

      <ItemCount
        stock={producto.stock}
        initial={1}
        onAdd={handleAdd}
        agregado={agregado}
      />
    </div>
  );
};

export default ItemDetail;
