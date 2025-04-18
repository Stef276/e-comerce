import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ShoppingCart />
      <span style={{ marginLeft: '5px' }}>0</span>
    </div>
  );
};

export default CartWidget;
