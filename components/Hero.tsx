import React, { useState } from 'react';
import { motion } from 'framer-motion';

const bgUrl = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      style={{
        minHeight: '88vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: `url(${bgUrl}) center/cover no-repeat`,
        overflow: 'hidden',
        paddingTop: 90,
        paddingBottom: 40,
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(20, 20, 30, 0.62)',
          zIndex: 1,
        }}
      />
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#fff',
          color: '#FF9900',
          fontWeight: 700,
          fontSize: 'clamp(14px, 4vw, 16px)',
          borderRadius: 18,
          padding: '7px 22px',
          marginBottom: 32,
          display: 'inline-block',
          boxShadow: '0 2px 12px rgba(34,34,34,0.10)',
          textAlign: 'center',
        }}
      >
        Yakında eğitime yeni bir soluk ol
      </motion.div>
      {/* Başlık */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: 'clamp(2rem, 8vw, 3.2rem)',
          fontWeight: 900,
          textAlign: 'center',
          color: '#fff',
          marginBottom: 18,
          zIndex: 2,
          letterSpacing: '-1.5px',
          lineHeight: 1.13,
          textShadow: '0 2px 24px #2228',
        }}
      >
        <span style={{ color: '#FF9900' }}>Senin Geleceğin, Senin Rotan</span> <br /> CeRRoute
      </motion.h1>
      {/* Alt başlık */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          fontSize: 'clamp(1rem, 4vw, 1.35rem)',
          color: '#f3f3f3',
          textAlign: 'center',
          maxWidth: 700,
          marginBottom: 44,
          zIndex: 2,
          fontWeight: 500,
          textShadow: '0 2px 16px #2226',
        }}
      >
        CeRRoute ile modern, erişilebilir ve yapay zeka destekli eğitim dünyasına adım at. Lansmana özel avantajlardan yararlanmak ve ilk katılanlardan olmak için hemen kaydol!
      </motion.p>
      {/* Butonlar */}
      <div style={{ 
        display: 'flex', 
        gap: 'clamp(12px, 3vw, 22px)', 
        zIndex: 2, 
        position: 'relative', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
      }}>
        <motion.div
          whileHover={{ scale: 1.07, boxShadow: '0 8px 32px #FF9900AA' }}
          whileTap={{ scale: 0.97 }}
          style={{ display: 'inline-block', width: '100%' }}
        >
          <a
            href="#early-access"
            style={{
              background: 'linear-gradient(90deg, #FF9900 60%, #ffb84d 100%)',
              color: '#fff',
              padding: 'clamp(14px, 4vw, 16px) clamp(24px, 6vw, 38px)',
              borderRadius: 32,
              fontWeight: 700,
              fontSize: 'clamp(1rem, 3vw, 1.13rem)',
              boxShadow: '0 4px 24px #FF9900AA',
              textDecoration: 'none',
              transition: 'all 0.2s',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              display: 'inline-block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Erken Kayıt Ol
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{ display: 'inline-block', width: '100%' }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <a
            href="#features"
            style={{
              background: 'rgba(255,255,255,0.13)',
              color: isHovered ? '#FF9900' : '#fff',
              padding: 'clamp(14px, 4vw, 16px) clamp(20px, 5vw, 32px)',
              borderRadius: 32,
              fontWeight: 700,
              fontSize: 'clamp(1rem, 3vw, 1.13rem)',
              boxShadow: '0 2px 12px rgba(34,34,34,0.10)',
              textDecoration: 'none',
              transition: 'all 0.2s',
              border: '1.5px solid #fff3',
              outline: 'none',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              display: 'inline-block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Neler Sunuyoruz?
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 