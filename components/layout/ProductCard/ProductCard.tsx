// ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.css';
import { ProductCardProps } from '../../../lib/types/type';


export const ProductCard: React.FC<ProductCardProps> = ({ products, viewAllLink }) => {
  return (
    <>
      <div className={styles.ProductsContainer}>
        <div className={styles.productContainer}>
          {products.map((product, index) => (
            <div key={index} className={styles.products}>
              <div className={styles.card}>
                <div className={styles.imageContainer} style={{ backgroundImage: product.image ? `url(${product.image})` : 'none' }}>
                  <div className={styles.addToCart}>
                    <span className={styles.btnText}>
                      <a href={product.link}>Add To Cart</a>
                    </span>
                  </div>
                </div>
              </div>
              <p className={styles.price}>${product.price}</p>
              <p className={styles.name}>{product.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btn}> <a href={viewAllLink}>View All  →</a></button>
        </div>
      </div>
    </>
  );
};

