import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import EarlyAccessForm from '../components/EarlyAccessForm';
import Footer from '../components/Footer';

const CerroutePage = () => {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Hero />
      <Features />
      <EarlyAccessForm />
      <Footer />
    </div>
  );
};

export default CerroutePage; 