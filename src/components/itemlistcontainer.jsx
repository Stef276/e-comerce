import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../helpers/fakeapi';
import ItemList from './itemlist';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    getProductos().then((res) => {
      if (categoriaId) {
        setProductos(res.filter((prod) => prod.categoria === categoriaId));
      } else {
        setProductos(res);
      }
    });
  }, [categoriaId]);

  return (
    <div>
      <h2>Catálogo</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
