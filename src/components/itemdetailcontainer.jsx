import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemdetail';
import { getProductoPorId } from '../helpers/fakeapi';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoPorId(itemId).then((res) => {
      setProducto(res);
    });
  }, [itemId]);

  return (
    <div style={{ marginTop: '80px' }}>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
