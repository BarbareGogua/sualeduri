
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'; 
import ProductView from './components/ProductView/ProductView'; 
import { CartProvider } from './context/CartContext.jsx';
import './styles/global.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <Header isMobile={isMobile} />
        <main>
          <ProductView isMobile={isMobile} />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;