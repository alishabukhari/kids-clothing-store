import type { Product } from '../interfaces/Product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="rounded-xl border border-gray-200 p-4 shadow-sm dark:border-gray-700">
      <h3 className="text-lg font-semibold">
        {product.name}
      </h3>

      <p className="mt-2 text-pink-500">
        ${product.price}
      </p>

      <p className="mt-1 text-sm">
        Stock: {product.stock}
      </p>

      <p className="mt-1 text-sm">
        Sizes: {product.size.join(', ')}
      </p>

      <button
        onClick={() => addToCart(product.id)}
        className="mt-4 rounded-lg bg-pink-500 px-4 py-2 text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;