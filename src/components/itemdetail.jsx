import React from 'react';
import ItemCount from './itemcount';

const ItemDetail = ({ producto }) => {
  return (
    <div style={{ marginTop: '80px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '150px' }} />
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>

      <ItemCount
        stock={producto.stock}
        initial={1}
        onAdd={(cantidad) => console.log(`Agregaste ${cantidad} producto(s) al carrito`)}
      />
    </div>
  );
};

export default ItemDetail;
