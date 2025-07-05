import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiUsers, FiCpu, FiGlobe } from 'react-icons/fi';
import Select from 'react-select';

const advantages = [
  {
    icon: <FiZap size={28} color="#FF9900" />,
    title: 'Hızlı ve Kolay Erişim',
    desc: 'Her yerden, her cihazdan eğitimlere anında ulaş.'
  },
  {
    icon: <FiUsers size={28} color="#FF9900" />,
    title: 'Etkileşimli Öğrenme',
    desc: 'Canlı ofis saatleri ve interaktif quizlerle aktif katılım.'
  },
  {
    icon: <FiCpu size={28} color="#FF9900" />,
    title: 'Yapay Zeka Destekli',
    desc: 'Kişiselleştirilmiş öneriler ve akıllı içerik.'
  },
  {
    icon: <FiGlobe size={28} color="#FF9900" />,
    title: 'Erişilebilir ve Kapsayıcı',
    desc: 'Herkes için erişilebilir, kapsayıcı ve modern platform.'
  },
];

const ilgiOptions = [
  { value: '', label: 'Seçiniz', isDisabled: true },
  { value: 'Veri Bilimi', label: 'Veri Bilimi' },
  { value: 'Web Geliştirme', label: 'Web Geliştirme' },
  { value: 'Kişisel Gelişim', label: 'Kişisel Gelişim' },
  { value: 'Tasarım', label: 'Tasarım' },
  { value: 'Sağlık', label: 'Sağlık' },
  { value: 'İşletmeler', label: 'İşletmeler' },
  { value: 'Bilgisayar Bilimi', label: 'Bilgisayar Bilimi' },
  { value: 'Sosyal Bilimler', label: 'Sosyal Bilimler' },
];

const inputStyle = {
  padding: '14px 20px',
  borderRadius: 16,
  border: '1.5px solid #ffe0b2',
  fontSize: 16,
  marginBottom: 6,
  outline: 'none',
  width: '100%',
  background: '#fff',
  marginTop: 2,
  transition: 'border 0.2s',
};

const labelStyle = {
  fontWeight: 600,
  color: '#FF9900',
  marginBottom: 4,
  fontSize: 15,
  marginLeft: 2,
};

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: 16,
    border: state.isFocused ? '2px solid #FF9900' : '1.5px solid #ffe0b2',
    boxShadow: state.isFocused ? '0 0 0 2px #FF990033' : '0 2px 8px #FF990022',
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#222',
    cursor: 'pointer',
    transition: 'border 0.2s, box-shadow 0.2s',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#FF9900' : state.isFocused ? '#fff7ec' : '#fff',
    color: state.isSelected ? '#fff' : '#222',
    fontWeight: state.isSelected ? 700 : 500,
    fontSize: 16,
    cursor: 'pointer',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 16,
    boxShadow: '0 8px 32px #FF990044',
    zIndex: 10,
    backgroundColor: '#fff',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#222',
    fontWeight: 500,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#bbb',
    fontWeight: 400,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#FF9900',
    paddingRight: 8,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

const EarlyAccessForm = () => {
  const [form, setForm] = useState({ ad: '', soyad: '', mail: '', ilgi: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (option) => {
    setForm({ ...form, ilgi: option ? option.value : '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Başvurunuz alındı!');
    setForm({ ad: '', soyad: '', mail: '', ilgi: '' });
  };

  return (
    <section id="early-access" style={{ background: '#fff', padding: 'clamp(48px, 12vw, 64px) 0 clamp(32px, 8vw, 48px) 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        display: 'flex',
        gap: 'clamp(32px, 8vw, 64px)',
        width: '100%',
        maxWidth: 1100,
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '0 clamp(16px, 4vw, 16px)',
      }}>
        {/* Avantajlar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ flex: '1 1 clamp(300px, 90vw, 340px)', minWidth: 'clamp(280px, 85vw, 320px)', maxWidth: 420, marginBottom: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h2 style={{ color: '#FF9900', fontWeight: 800, fontSize: 'clamp(1.4rem, 5vw, 1.6rem)', marginBottom: 24, letterSpacing: '-0.5px', textAlign: 'left' }}>
            Neden CeRRoute?
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {advantages.map((adv, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 28 }}>
                <span style={{ marginTop: 2 }}>{adv.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#222', fontSize: 'clamp(15px, 4vw, 17px)', marginBottom: 2 }}>{adv.title}</div>
                  <div style={{ color: '#444', fontSize: 'clamp(14px, 3.5vw, 15px)' }}>{adv.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255,255,255,0.98)',
            borderRadius: 32,
            boxShadow: '0 4px 32px #FF990022',
            padding: 'clamp(32px, 8vw, 40px) clamp(24px, 6vw, 36px) clamp(24px, 6vw, 32px) clamp(24px, 6vw, 36px)',
            minWidth: 'clamp(280px, 85vw, 320px)',
            maxWidth: 420,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1.5px solid #ffe0b2',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.35rem)', fontWeight: 800, color: '#FF9900', marginBottom: 8, letterSpacing: '-0.5px', textAlign: 'center' }}>
            Erken Kayıt Fırsatı
          </h2>
          <p style={{ color: '#444', marginBottom: 22, textAlign: 'center', fontWeight: 500, fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
            Aşağıdaki formu doldurarak CeRRoute platformuna ilk katılanlardan biri olabilirsiniz.
          </p>
          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
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
            <label style={labelStyle} htmlFor="ilgi">Eğitim İlgi Alanı</label>
            <Select
              inputId="ilgi"
              name="ilgi"
              options={ilgiOptions}
              value={ilgiOptions.find(opt => opt.value === form.ilgi) || ilgiOptions[0]}
              onChange={handleSelectChange}
              placeholder="Seçiniz"
              styles={customSelectStyles}
              isSearchable={false}
            />
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              style={{ width: '100%' }}
            >
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(90deg, #FF9900 60%, #ffb84d 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 32,
                  padding: '15px 0',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 24px #FF990044',
                  marginTop: 8,
                  transition: 'all 0.2s',
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