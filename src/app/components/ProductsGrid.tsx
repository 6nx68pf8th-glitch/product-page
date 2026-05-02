import { Product } from '../types/api';
import { ProductCard } from './ProductCard';


interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div >
      {products.map((product) => (
        <ProductCard key={product.articleNumber} product={product} />
      ))}
    </div>
  );
};


