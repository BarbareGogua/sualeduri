
import React, { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useCart } from '../../context/CartContext';
import './ProductView.css';
import iconMinus from '../../assets/icons/icon-minus.jpg';
import iconPlus from '../../assets/icons/icon-plus.jpg';
import iconCartWhite from '../../assets/icons/icon-cart-white.jpg';

const ProductView = ({ isMobile }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    brand: "Sneaker Company",
    price: 125.00,
    originalPrice: 250.00,
    discount: 50,
    thumbnail: "/src/assets/images/image-product-1.jpg"
  };

  const productImages = [
   "/src/assets/images/image-product-1.jpg",
   "/src/assets/images/image-product-2.jpg",
   "/src/assets/images/image-product-3.jpg",
   "/src/assets/images/image-product-4.jpg"
  ];
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className={`product-view ${isMobile ? 'mobile' : ''}`}>
      <div className="product-images">
        <ImageGallery images={productImages} isMobile={isMobile} />
      </div>

      <div className="product-info">
        <span className="company-name">{product.brand}</span>
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>

        <div className="product-price">
          <div className="current-price">
            <span className="price">${product.price.toFixed(2)}</span>
            <span className="discount">{product.discount}%</span>
          </div>
          <span className="original-price">${product.originalPrice.toFixed(2)}</span>
        </div>

        <div className="product-actions">
          <div className="quantity-selector">
            <button
              className="quantity-button"
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
            >
              <img src={iconMinus} alt="Minus" />
            </button>
            <span className="quantity">{quantity}</span>
            <button
              className="quantity-button"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
            >
              <img src={iconPlus} alt="Plus" />
            </button>
          </div>

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            <img src={iconCartWhite} alt="Cart" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;