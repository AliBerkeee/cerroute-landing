import React from 'react';

const Footer = () => (
  <footer style={{
    background: '#fff',
    borderTop: '1.5px solid #f3f3f3',
    padding: '32px 0 18px 0',
    textAlign: 'center',
    marginTop: 48,
  }}>
    <div style={{ fontWeight: 800, fontSize: 22, color: '#FF9900', marginBottom: 8 }}>
      CeRRoute
    </div>
    <div style={{ color: '#888', fontSize: 15, marginBottom: 10 }}>
      © {new Date().getFullYear()} CeRRoute. Tüm hakları saklıdır.
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: 18 }}>
      <span style={{ fontSize: 22, color: '#FF9900', cursor: 'pointer' }}>ⓕ</span>
      <span style={{ fontSize: 22, color: '#FF9900', cursor: 'pointer' }}>ⓧ</span>
      <span style={{ fontSize: 22, color: '#FF9900', cursor: 'pointer' }}>ⓘ</span>
    </div>
  </footer>
);

export default Footer; 