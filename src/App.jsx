import React from 'react';
import Header from './Component/Header';
import './index.css';
import Footer from './Component/Footer';
import HomePage from './Component/HomePage';
import ProductDetail from './Component/ProductDetail';
import TechnicalSpecifications from './Component/Specs'; 
import threshers from './Component/Threshers';
import ProductDetailPage from './Component/ProductDetailPage';
import ContactUs from './Component/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './Component/Gallery';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product/:ProductId" element={<TechnicalSpecifications threshers={threshers} />} />
        <Route path="/:ProductId" element={<ProductDetailPage threshers={threshers} />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/gallery" element = {<Gallery/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
