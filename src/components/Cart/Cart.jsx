import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';
import deleteIcon from '../../assets/icons/icon-delete.jpg'; 

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart">
      <div className="cart-header">
        <h3>Cart</h3>
      </div>

      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="item-image">
                  <img src={`/src/assets/images/${item.thumbnail}`} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">
                      ${item.price.toFixed(2)} x {item.quantity}{' '}
                      <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                    </p>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Delete item"
                  >
                    <img src={deleteIcon} alt="Delete item" /> {}
                  </button>
                </li>
              ))}
            </ul>
            <button className="checkout-button">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;