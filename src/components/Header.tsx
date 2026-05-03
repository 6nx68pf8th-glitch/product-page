import { useCart } from '../context/CartContext';
import styles from './header.module.css';

export const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"/>
        </svg>
      </div>
      <div className={styles.cart}>
        <span >{cartCount}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="100"
          height="100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </header>
  );
};
