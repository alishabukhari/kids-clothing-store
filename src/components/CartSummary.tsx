import { useCart } from '../context/CartContext';

function CartSummary() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="rounded-lg bg-pink-100 px-4 py-2 text-pink-700 dark:bg-pink-900 dark:text-pink-100">
      Cart: {totalItems} item{totalItems !== 1 ? 's' : ''}
    </div>
  );
}

export default CartSummary;