import { useState } from 'react';
import { products, categories } from '../Data/data';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter(
          (product) => product.categoryId === selectedCategory
        );

  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Our Products
      </h2>

      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCategory(null)}
          className="rounded-lg border px-4 py-2"
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className="rounded-lg border px-4 py-2"
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;