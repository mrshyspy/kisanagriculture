import React from 'react';
import Header from './Component/Header';
import './index.css';
import Footer from './Component/Footer';
import ProductPage from './Component/Product';
import ProductSlider from './Component/ProductDetail';
import TechnicalSpecifications from './Component/Specs'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product-detail" element={<ProductSlider />} />
        <Route path="/technical-specifications" element={<TechnicalSpecifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
