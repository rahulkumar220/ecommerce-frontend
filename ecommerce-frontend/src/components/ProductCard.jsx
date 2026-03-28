import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? '#f59e0b' : 'none'}
          stroke="#f59e0b"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span>{rating.toFixed(1)}</span>
    </div>
  );
};

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = isInCart(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const badgeClass = {
    Sale: 'badge-sale',
    New: 'badge-new',
    Hot: 'badge-hot',
    Bestseller: 'badge-hot',
  }[product.badge] || 'badge-new';

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className={`badge ${badgeClass} product-card__badge`}>{product.badge}</span>
        )}
        {discount && (
          <span className="product-card__discount">-{discount}%</span>
        )}
      </div>

      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <StarRating rating={product.rating} />
        <p className="product-card__reviews">{product.reviews.toLocaleString()} reviews</p>

        <div className="product-card__footer">
          <div className="product-card__prices">
            <span className="product-card__price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="product-card__original">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button
            className={`product-card__btn ${added ? 'added' : ''} ${inCart && !added ? 'in-cart' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? (
              <>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </>
            ) : (
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
