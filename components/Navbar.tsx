import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Özellikler', to: 'features' },
  { label: 'Çözümler', to: 'solutions' },
  { label: 'SSS', to: 'faq' },
  { label: 'İletişim', to: 'contact' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const targetPosition = el.offsetTop - 100;
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
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: scrolled ? 'rgba(250,250,250,0.97)' : 'rgba(255,255,255,0.02)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 4px 18px rgba(34,34,34,0.10)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(16px, 4vw, 48px)',
        height: 'clamp(60px, 12vw, 72px)',
        transition: 'background 0.25s, box-shadow 0.25s, backdrop-filter 0.25s',
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 'clamp(20px, 5vw, 24px)', color: '#FF9900', letterSpacing: '-1px' }}>
        CeRRoute
      </div>
      {/* Masaüstü Menü */}
      {!isMobile && (
        <>
          <div style={{ 
            display: 'flex', 
            gap: 'clamp(20px, 5vw, 38px)', 
            position: 'absolute', 
            left: '50%', 
            top: 0, 
            height: '100%', 
            transform: 'translateX(-50%)', 
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {navLinks.map(link => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: scrolled ? '#222' : '#fff',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  cursor: 'pointer',
                  padding: 0,
                  margin: 0,
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#FF9900')}
                onMouseOut={e => (e.currentTarget.style.color = scrolled ? '#222' : '#fff')}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('early-access')}
            style={{
              background: 'linear-gradient(90deg, #FF9900 60%, #ffb84d 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 'clamp(13px, 3vw, 15px)',
              borderRadius: 14,
              padding: 'clamp(7px, 2vw, 9px) clamp(16px, 4vw, 22px)',
              textDecoration: 'none',
              marginLeft: 'clamp(16px, 4vw, 32px)',
              boxShadow: '0 2px 12px #FF990044',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'background 0.2s, box-shadow 0.2s',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
            }}
            onMouseOver={e => { e.currentTarget.style.background = '#FF9900'; e.currentTarget.style.boxShadow = '0 4px 18px #FF990088'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #FF9900 60%, #ffb84d 100%)'; e.currentTarget.style.boxShadow = '0 2px 12px #FF990044'; }}
          >
            Erken Kayıt
          </button>
        </>
      )}
      {/* Mobil Hamburger Menü */}
      {isMobile && (
        <>
          <button
            aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FF9900',
              fontSize: 32,
              cursor: 'pointer',
              zIndex: 201,
              marginLeft: 'auto',
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.2s ease',
              transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          {/* Açılır Menü Paneli */}
          {menuOpen && (
            <>
              {/* Overlay */}
              <div
                onClick={() => setMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(0,0,0,0.3)',
                  zIndex: 199,
                  animation: 'fadeIn 0.2s ease',
                }}
              />
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  width: '80vw',
                  maxWidth: 320,
                  height: '100vh',
                  background: '#fff',
                  boxShadow: '-4px 0 32px rgba(0,0,0,0.15)',
                  zIndex: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '32px 24px 24px 24px',
                  animation: 'slideInRight 0.3s ease',
                  transform: 'translateX(0)',
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginBottom: 32,
                  paddingBottom: 16,
                  borderBottom: '2px solid #f3f3f3',
                }}>
                  <div style={{ fontWeight: 800, fontSize: 24, color: '#FF9900', letterSpacing: '-1px' }}>
                    CeRRoute
                  </div>
                </div>
                {navLinks.map((link, index) => (
                  <button
                    key={link.to}
                    onClick={() => { setMenuOpen(false); scrollToSection(link.to); }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#222',
                      fontWeight: 600,
                      fontSize: 18,
                      cursor: 'pointer',
                      padding: '16px 0',
                      margin: 0,
                      textAlign: 'left',
                      width: '100%',
                      borderBottom: '1px solid #f8f8f8',
                      transition: 'color 0.2s, background 0.2s',
                      animation: `slideInRight 0.3s ease ${index * 0.05}s both`,
                    }}
                    onMouseOver={e => { e.currentTarget.style.color = '#FF9900'; e.currentTarget.style.background = '#fff7ec'; }}
                    onMouseOut={e => { e.currentTarget.style.color = '#222'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => { setMenuOpen(false); scrollToSection('early-access'); }}
                  style={{
                    background: 'linear-gradient(90deg, #FF9900 60%, #ffb84d 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 16,
                    borderRadius: 16,
                    padding: '16px 0',
                    marginTop: 32,
                    boxShadow: '0 4px 16px #FF990044',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    letterSpacing: '0.5px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    animation: 'slideInRight 0.3s ease 0.2s both',
                  }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px #FF990066'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px #FF990044'; }}
                >
                  Erken Kayıt
                </button>
              </div>
            </>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar; 