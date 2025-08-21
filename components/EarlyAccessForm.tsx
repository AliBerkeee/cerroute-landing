import React, { useState } from 'react';
import { motion } from 'framer-motion';

const advantages = [
  {
    title: 'Hızlı ve Kolay Erişim',
    desc: 'Her yerden, her cihazdan eğitimlere anında ulaş.'
  },
  {
    title: 'Etkileşimli Öğrenme',
    desc: 'Canlı ofis saatleri ve interaktif quizlerle aktif katılım.'
  },
  {
    title: 'Yapay Zeka Destekli',
    desc: 'Kişiselleştirilmiş öneriler ve akıllı içerik.'
  },
  {
    title: 'Erişilebilir ve Kapsayıcı',
    desc: 'Herkes için erişilebilir, kapsayıcı ve modern platform.'
  },
];

const inputStyle = {
  padding: '18px 24px',
  borderRadius: 16,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  fontSize: 16,
  marginBottom: 8,
  outline: 'none',
  width: '100%',
  background: 'rgba(255, 255, 255, 0.1)',
  marginTop: 4,
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  color: '#fff',
  position: 'relative' as const,
  zIndex: 1,
};

const labelStyle = {
  fontWeight: 600,
  color: '#fff',
  marginBottom: 6,
  fontSize: 15,
  marginLeft: 2,
  letterSpacing: '-0.3px',
  position: 'relative' as const,
  zIndex: 2,
};

const radioContainerStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 12,
  marginTop: 8,
  position: 'relative' as const,
  zIndex: 2,
};

const radioOptionStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '12px 16px',
  borderRadius: 12,
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(10px)',
};

const radioInputStyle = {
  width: 18,
  height: 18,
  accentColor: '#FF9900',
  cursor: 'pointer',
};

const radioLabelStyle = {
  color: '#fff',
  fontSize: 16,
  fontWeight: 500,
  cursor: 'pointer',
  flex: 1,
};

const EarlyAccessForm = () => {
  const [form, setForm] = useState({ ad: '', soyad: '', mail: '', meslek: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Başvurunuz alındı!');
    setForm({ ad: '', soyad: '', mail: '', meslek: '' });
  };

  return (
    <section id="early-access" style={{ background: '#FAFAFA', padding: '120px 0 80px 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        display: 'flex',
        gap: 'clamp(40px, 8vw, 80px)',
        width: '100%',
        maxWidth: 1200,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '0 clamp(20px, 4vw, 24px)',
      }}>
        {/* Avantajlar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            flex: '1 1 clamp(400px, 90vw, 500px)', 
            minWidth: 'clamp(350px, 85vw, 400px)', 
            maxWidth: 520, 
            marginBottom: 32, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center' 
          }}
        >
          <h2 style={{ 
            color: '#FF9900', 
            fontWeight: 700, 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            marginBottom: 40, 
            letterSpacing: '-1px', 
            textAlign: 'left',
            lineHeight: 1.2
          }}>
            Neden CeRRoute?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 12,
                  padding: '24px 0',
                  borderBottom: i < advantages.length - 1 ? '1px solid rgba(255, 153, 0, 0.1)' : 'none'
                }}
              >
                <div style={{ 
                  fontWeight: 700, 
                  color: '#222', 
                  fontSize: 'clamp(18px, 4vw, 20px)', 
                  marginBottom: 8,
                  letterSpacing: '-0.5px',
                  lineHeight: 1.3
                }}>
                  {adv.title}
                </div>
                <div style={{ 
                  color: '#666', 
                  fontSize: 'clamp(16px, 3.5vw, 17px)',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}>
                  {adv.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(20, 20, 20, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: 24,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '48px 40px',
            minWidth: 'clamp(350px, 85vw, 400px)',
            maxWidth: 480,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)',
            opacity: 0.1,
            filter: 'blur(30px)',
            zIndex: 0,
          }} />
          
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 12, 
            letterSpacing: '-0.5px', 
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            Erken Kayıt Fırsatı
          </h2>
          <p style={{ 
            color: '#ccc', 
            marginBottom: 32, 
            textAlign: 'center', 
            fontWeight: 400, 
            fontSize: 'clamp(16px, 3.5vw, 17px)',
            lineHeight: 1.6,
            position: 'relative',
            zIndex: 2
          }}>
            Aşağıdaki formu doldurarak CeRRoute platformuna ilk katılanlardan biri olabilirsiniz.
          </p>
          
          <form onSubmit={handleSubmit} style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 20,
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <label style={labelStyle} htmlFor="ad">Adınız</label>
              <input
                style={inputStyle}
                type="text"
                name="ad"
                id="ad"
                placeholder="Adınız"
                value={form.ad}
                onChange={handleChange}
                required
              />
            </div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <label style={labelStyle} htmlFor="soyad">Soyadınız</label>
              <input
                style={inputStyle}
                type="text"
                name="soyad"
                id="soyad"
                placeholder="Soyadınız"
                value={form.soyad}
                onChange={handleChange}
                required
              />
            </div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <label style={labelStyle} htmlFor="mail">E-posta</label>
              <input
                style={inputStyle}
                type="email"
                name="mail"
                id="mail"
                placeholder="E-posta"
                value={form.mail}
                onChange={handleChange}
                required
              />
            </div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <label style={labelStyle}>Mesleğiniz</label>
              <div style={radioContainerStyle}>
                <label style={radioOptionStyle}>
                  <input
                    type="radio"
                    name="meslek"
                    value="öğrenci"
                    checked={form.meslek === 'öğrenci'}
                    onChange={handleChange}
                    style={radioInputStyle}
                    required
                  />
                  <span style={radioLabelStyle}>Öğrenci</span>
                </label>
                
                <label style={radioOptionStyle}>
                  <input
                    type="radio"
                    name="meslek"
                    value="öğretmen"
                    checked={form.meslek === 'öğretmen'}
                    onChange={handleChange}
                    style={radioInputStyle}
                    required
                  />
                  <span style={radioLabelStyle}>Öğretmen</span>
                </label>
                
                <label style={radioOptionStyle}>
                  <input
                    type="radio"
                    name="meslek"
                    value="öğrenmeye açık"
                    checked={form.meslek === 'öğrenmeye açık'}
                    onChange={handleChange}
                    style={radioInputStyle}
                    required
                  />
                  <span style={radioLabelStyle}>Öğrenmeye Açık</span>
                </label>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%', marginTop: 8, position: 'relative', zIndex: 2 }}
            >
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 16,
                  padding: '18px 0',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 24px rgba(255, 153, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  letterSpacing: '0.5px',
                }}
              >
                Erken Kayıt Ol
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccessForm; 