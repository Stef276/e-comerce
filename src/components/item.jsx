import { Link } from 'react-router-dom';

const Item = ({ id, nombre, descripcion, precio, imagen }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>{nombre}</h3>
      <img src={imagen} alt={nombre} style={{ width: '100px' }} />
      <p>{descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>
      <Link to={`/detalle/${id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
