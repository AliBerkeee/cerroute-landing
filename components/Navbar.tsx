import React from 'react';

const navLinks = [
  { label: 'Özellikler', to: 'features' },
  { label: 'Çözümler', to: 'solutions' },
  { label: 'SSS', to: 'faq' },
  { label: 'İletişim', to: 'contact' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // navbar yüksekliği kadar offset
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const Navbar = () => (
  <nav
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      background: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 2px 12px rgba(34,34,34,0.07)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      height: 72,
      transition: 'background 0.2s',
    }}
  >
    <div style={{ fontWeight: 800, fontSize: 24, color: '#FF9900', letterSpacing: '-1px' }}>
      CeRRoute
    </div>
    <div style={{ display: 'flex', gap: 38, position: 'absolute', left: '50%', top: 0, height: '100%', transform: 'translateX(-50%)', alignItems: 'center' }}>
      {navLinks.map(link => (
        <button
          key={link.to}
          onClick={() => scrollToSection(link.to)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontWeight: 600,
            fontSize: 18,
            cursor: 'pointer',
            padding: 0,
            margin: 0,
            transition: 'color 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.color = '#FF9900')}
          onMouseOut={e => (e.currentTarget.style.color = '#fff')}
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
        fontSize: 15,
        borderRadius: 14,
        padding: '9px 22px',
        textDecoration: 'none',
        marginLeft: 32,
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
  </nav>
);

export default Navbar; 