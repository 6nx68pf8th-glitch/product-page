import { Product } from '../types/api';
import { useCart } from '../context/CartContext';


interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const discountedPrice = product.promotion
    ? Math.round(product.price * (1 - product.promotion.percentage / 100))
    : product.price;

  const handleAddToCart = () => {
    addToCart({
      articleNumber: product.articleNumber,
      ean: product.ean,
      link: product.link,
      image: product.image,
      title: product.title,
      description: product.description,
      brandName: product.brandName,
      brandLogo: product.brandLogo,
      price: product.price,
    });
  };

  return (
    <div >
      <div >
        <img
          src={product.image.link}
          alt={product.image.altText}
       
        />
      </div>
      <div >
        <h3 >{product.title}</h3>
        <p >{product.brandName}</p>
        <div >
          {product.promotion && (
            <span >
              €{product.price.toFixed(2)}
            </span>
          )}
          <span >
            €{discountedPrice.toFixed(2)}
          </span>
          {product.promotion && (
            <span >
              {product.promotion.percentage}% off
            </span>
          )}
        </div>
        <p >{product.description}</p>
        <button
          onClick={handleAddToCart}
         
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
