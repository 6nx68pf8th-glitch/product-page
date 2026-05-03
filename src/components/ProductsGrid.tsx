import { Product } from '../types/api';
import { ProductCard } from './ProductCard';

interface ProductsGridProps {
  products: Product[] | undefined; // Make it optional
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  if (!products) {
    return <div>Loading products...</div>;
  }

  if (products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.articleNumber} product={product} />
      ))}
    </div>
  );
};
