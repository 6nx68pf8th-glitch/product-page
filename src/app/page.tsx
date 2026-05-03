'use client'

import { GET } from '../services/api';
import { ApiResponse } from '../types/api';
import { ProductsGrid } from '../components/ProductsGrid';
import { CartProvider } from '../context/CartContext';
import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';


export default function Home() {
  const [productsData, setProductsData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await GET();
        setProductsData(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  if (!productsData) {
    return null;
  }

  return (
     <CartProvider>
      <div className={styles.container}>
        <Header logo={productsData.logo} />
        <main className={styles.main}>
          <h1 className={styles.title}>{productsData.title}</h1>
          <ProductsGrid products={productsData.products} />
        </main>
      </div>
    </CartProvider>

    
  );
}
