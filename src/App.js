// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import {CartProvider} from 'react-use-cart'
function App() {
  return (
          <CartProvider>
        <Home />
          <Cart />
          </CartProvider>

  );
}

export default App;
