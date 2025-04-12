import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import './Header.css';
import menuIcon from '../../assets/icons/icon-menu.jpg';
import closeIcon from '../../assets/icons/icon-close.jpg';
import logoIcon from '../../assets/icons/logo.jpg';
import cartIcon from '../../assets/icons/icon-cart.jpg';
import avatarImage from '../../assets/images/image-avatar.jpg';

const Header = ({ isMobile }) => {
 const { cartItems, isCartOpen, toggleCart } = useCart();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

 const toggleMobileMenu = () => {
   setMobileMenuOpen(!mobileMenuOpen);
   if (!mobileMenuOpen) {
     document.body.classList.add('mobile-menu-open');
   } else {
     document.body.classList.remove('mobile-menu-open');
   }
 };

 const closeMobileMenu = () => {
   setMobileMenuOpen(false);
   document.body.classList.remove('mobile-menu-open');
 };

 return (
   <header className="header">
     <div className="header-content">
       <div className="header-left">
         {isMobile && (
           <button
             className="hamburger-menu"
             onClick={toggleMobileMenu}
             aria-label="Menu"
           >
             <img src={menuIcon} alt="Menu" />
           </button>
         )}

         <div className="logo">
           <img src={logoIcon} alt="Sneakers" />
         </div>

         <nav className={`navigation ${isMobile ? 'mobile' : ''} ${mobileMenuOpen ? 'active' : ''}`}>
           {isMobile && (
             <button
               className="close-menu"
               onClick={closeMobileMenu}
               aria-label="Close menu"
             >
               <img src={closeIcon} alt="Close" />
             </button>
           )}
           <ul>
             <li><a href="#collections" onClick={isMobile ? closeMobileMenu : undefined}>Collections</a></li>
             <li><a href="#men" onClick={isMobile ? closeMobileMenu : undefined}>Men</a></li>
             <li><a href="#women" onClick={isMobile ? closeMobileMenu : undefined}>Women</a></li>
             <li><a href="#about" onClick={isMobile ? closeMobileMenu : undefined}>About</a></li>
             <li><a href="#contact" onClick={isMobile ? closeMobileMenu : undefined}>Contact</a></li>
           </ul>
         </nav>
       </div>

       <div className="header-right">
         <button
           className="cart-button"
           onClick={toggleCart}
           aria-label="Cart"
         >
           <img src={cartIcon} alt="Cart" />
           {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
         </button>

         <div className="avatar">
           <img src={avatarImage} alt="User" />
         </div>
       </div>
     </div>

     {isCartOpen && <Cart />}

     {mobileMenuOpen && isMobile && (
       <div className="overlay" onClick={closeMobileMenu}></div>
     )}
   </header>
 );
};

export default Header;