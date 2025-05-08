import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, agregado }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregar = () => {
    onAdd(cantidad);
  };

  if (agregado) {
    return (
      <div style={{ marginTop: '1rem' }}>
        <p style={{ color: 'green' }}>Producto agregado al carrito ✔️</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button onClick={handleAgregar} style={{ marginTop: '10px' }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
