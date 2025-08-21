import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import EarlyAccessForm from '../components/EarlyAccessForm';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <EarlyAccessForm />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default HomePage;
