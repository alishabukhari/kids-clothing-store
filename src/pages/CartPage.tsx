import { useCart } from '../context/CartContext';
import { products } from '../Data/data';

function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const cartProducts = cartItems.map((cartItem) => {
    const product = products.find(
      (product) => product.id === cartItem.productId
    );

    return {
      ...cartItem,
      product,
    };
  });

  const totalBill = cartProducts.reduce((total, item) => {
    if (!item.product) {
      return total;
    }

    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Shopping Cart
      </h2>

      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartProducts.map((item) => (
              <div
                key={item.productId}
                className="rounded-lg border p-4 dark:border-gray-700"
              >
                <h3 className="font-semibold">
                  {item.product?.name}
                </h3>

                <p className="mt-2">
                  Price: ${item.product?.price}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.productId)
                    }
                    className="rounded border px-3 py-1"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.productId)
                    }
                    className="rounded border px-3 py-1"
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      removeFromCart(item.productId)
                    }
                    className="rounded bg-red-500 px-3 py-1 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 dark:border-gray-700">
            <h3 className="text-xl font-bold">
              Total: ${totalBill.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;