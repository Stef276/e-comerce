import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ShoppingCart />
      <span style={{ marginLeft: '5px' }}>{cantidadTotal()}</span>
    </div>
  );
};

export default CartWidget;
