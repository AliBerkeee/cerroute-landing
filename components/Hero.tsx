import React, { useState } from 'react';
import { motion } from 'framer-motion';

const bgUrl = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// Apple-style animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const badgeVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: -30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.3
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    filter: 'blur(15px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.5
    }
  }
};

const subtitleVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.8
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 1.1
    }
  }
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: '100vh',
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
      {/* Enhanced Overlay with Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.75) 0%, rgba(40, 40, 60, 0.6) 50%, rgba(20, 20, 30, 0.8) 100%)',
          zIndex: 1,
        }}
      />
      
      {/* Animated Background Particles */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(255, 153, 0, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: 150,
          height: 150,
          background: 'radial-gradient(circle, rgba(0, 153, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />

      {/* Badge */}
      <motion.div
        variants={badgeVariants}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 8px 32px rgba(255, 153, 0, 0.3)',
          transition: { duration: 0.3 }
        }}
        style={{
          position: 'relative',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          color: '#FF9900',
          fontWeight: 700,
          fontSize: 'clamp(14px, 4vw, 16px)',
          borderRadius: 25,
          padding: '12px 28px',
          marginBottom: 40,
          display: 'inline-block',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        Yakında eğitime yeni bir soluk ol
      </motion.div>

      {/* Enhanced Title */}
      <motion.h1
        variants={titleVariants}
        style={{
          fontSize: 'clamp(2.5rem, 10vw, 4rem)',
          fontWeight: 900,
          textAlign: 'center',
          color: '#fff',
          marginBottom: 24,
          zIndex: 2,
          letterSpacing: '-2px',
          lineHeight: 1.1,
          textShadow: '0 4px 32px rgba(0,0,0,0.5)',
          position: 'relative',
        }}
      >
        <motion.span 
          style={{ color: '#FF9900' }}
          animate={{
            textShadow: [
              '0 0 20px rgba(255, 153, 0, 0.5)',
              '0 0 40px rgba(255, 153, 0, 0.8)',
              '0 0 20px rgba(255, 153, 0, 0.5)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Senin Geleceğin, Senin Rotan
        </motion.span> 
        <br /> 
        <motion.span
          animate={{
            textShadow: [
              '0 4px 32px rgba(0,0,0,0.5)',
              '0 8px 48px rgba(0,0,0,0.7)',
              '0 4px 32px rgba(0,0,0,0.5)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          CeRRoute
        </motion.span>
      </motion.h1>

      {/* Enhanced Subtitle */}
      <motion.p
        variants={subtitleVariants}
        style={{
          fontSize: 'clamp(1.1rem, 4.5vw, 1.5rem)',
          color: '#f8f8f8',
          textAlign: 'center',
          maxWidth: 800,
          marginBottom: 60,
          zIndex: 2,
          fontWeight: 500,
          textShadow: '0 2px 16px rgba(0,0,0,0.4)',
          lineHeight: 1.6,
        }}
      >
        CeRRoute ile modern, erişilebilir ve yapay zeka destekli eğitim dünyasına adım at. Lansmana özel avantajlardan yararlanmak ve ilk katılanlardan olmak için hemen kaydol!
      </motion.p>

      {/* Enhanced Buttons */}
      <motion.div 
        variants={buttonVariants}
        style={{ 
          display: 'flex', 
          gap: 'clamp(16px, 4vw, 24px)', 
          zIndex: 2, 
          position: 'relative', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <motion.div
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 16px 48px rgba(255, 153, 0, 0.5)',
            transition: { duration: 0.4 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          style={{ display: 'inline-block', width: '100%' }}
        >
          <a
            href="#early-access"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('early-access');
              if (element) {
                const targetPosition = element.offsetTop - 100;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1200; // Daha uzun süre
                let start = null;

                const animation = (currentTime) => {
                  if (start === null) start = currentTime;
                  const timeElapsed = currentTime - start;
                  const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                  window.scrollTo(0, run);
                  if (timeElapsed < duration) requestAnimationFrame(animation);
                };

                // Smooth easing function
                const easeInOutCubic = (t, b, c, d) => {
                  t /= d / 2;
                  if (t < 1) return c / 2 * t * t * t + b;
                  t -= 2;
                  return c / 2 * (t * t * t + 2) + b;
                };

                requestAnimationFrame(animation);
              }
            }}
            style={{
              background: 'linear-gradient(135deg, #FF9900 0%, #ffb84d 25%, #FF9900 50%, #ffb84d 75%, #FF9900 100%)',
              backgroundSize: '200% 200%',
              color: '#fff',
              padding: 'clamp(14px, 3.5vw, 18px) clamp(28px, 6vw, 40px)',
              borderRadius: 40,
              fontWeight: 700,
              fontSize: 'clamp(1rem, 3vw, 1.15rem)',
              boxShadow: '0 8px 32px rgba(255, 153, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              letterSpacing: '0.8px',
              display: 'inline-block',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundPosition = '100% 100%';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundPosition = '0% 0%';
            }}
          >
            <motion.span
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
              </motion.svg>
              Erken Kayıt Ol
            </motion.span>
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                transform: 'skewX(-15deg)',
              }}
              whileHover={{
                left: '100%',
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '0%',
                height: '0%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              whileHover={{
                width: '300%',
                height: '300%',
                transition: { duration: 0.6 }
              }}
            />
          </a>
        </motion.div>

        <motion.div
          whileHover={{ 
            scale: 1.03,
            boxShadow: '0 12px 32px rgba(255,255,255,0.25)',
            transition: { duration: 0.4 }
          }}
          whileTap={{ 
            scale: 0.97,
            transition: { duration: 0.1 }
          }}
          style={{ display: 'inline-block', width: '100%' }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('features');
              if (element) {
                const targetPosition = element.offsetTop - 100;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1200; // Daha uzun süre
                let start = null;

                const animation = (currentTime) => {
                  if (start === null) start = currentTime;
                  const timeElapsed = currentTime - start;
                  const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                  window.scrollTo(0, run);
                  if (timeElapsed < duration) requestAnimationFrame(animation);
                };

                // Smooth easing function
                const easeInOutCubic = (t, b, c, d) => {
                  t /= d / 2;
                  if (t < 1) return c / 2 * t * t * t + b;
                  t -= 2;
                  return c / 2 * (t * t * t + 2) + b;
                };

                requestAnimationFrame(animation);
              }
            }}
            style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(24px)',
              color: isHovered ? '#FF9900' : '#fff',
              padding: 'clamp(14px, 3.5vw, 18px) clamp(24px, 5vw, 36px)',
              borderRadius: 40,
              fontWeight: 600,
              fontSize: 'clamp(1rem, 3vw, 1.15rem)',
              boxShadow: '0 6px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              border: '2px solid rgba(255,255,255,0.4)',
              outline: 'none',
              cursor: 'pointer',
              letterSpacing: '0.8px',
              display: 'inline-block',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.span
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
              </motion.svg>
              Neler Sunuyoruz?
            </motion.span>
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
                transition: { duration: 0.4 }
              }}
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: 40,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: 3,
            height: 50,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), transparent)',
            borderRadius: 2,
          }}
        />
        <motion.span
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          KAYDIR
        </motion.span>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 