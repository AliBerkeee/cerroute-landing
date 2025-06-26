import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiUsers, FiMessageCircle, FiClock, FiGlobe, FiCheckSquare } from 'react-icons/fi';

const features = [
  { icon: <FiZap size={28} color="#fff" />, bg: '#FF9900', color: '#FF9900', title: 'Yapay Zeka Destekli', desc: 'Akıllı öneriler ve kişiselleştirilmiş eğitim deneyimi.' },
  { icon: <FiUsers size={28} color="#fff" />, bg: '#FF9900', color: '#FF9900', title: 'Erişilebilirlik', desc: 'Sesli komutlar ve gelişmiş betimleme ile herkes için erişim.' },
  { icon: <FiMessageCircle size={28} color="#fff" />, bg: '#0099ff', color: '#0099ff', title: 'Etkileşimli Quizler', desc: 'Öğrenmeyi pekiştiren, eğlenceli ve etkileşimli quizler.' },
  { icon: <FiClock size={28} color="#fff" />, bg: '#FF9900', color: '#FF9900', title: 'Ofis Saatleri', desc: 'Eğitmenlerle birebir veya grup halinde canlı etkileşim.' },
  { icon: <FiGlobe size={28} color="#fff" />, bg: '#0099ff', color: '#0099ff', title: 'Çevrimdışı Eğitim', desc: 'İnternet olmasa bile eğitim materyallerine erişim.' },
  { icon: <FiCheckSquare size={28} color="#fff" />, bg: '#FF9900', color: '#FF9900', title: 'Kariyer Takibi', desc: 'Gelişimini ve başarılarını kolayca takip et.' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const Features = () => (
  <section id="features" style={{ background: '#181A20', padding: '72px 0 48px 0', minHeight: 600 }}>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', fontSize: '2.3rem', fontWeight: 800, marginBottom: 48, color: '#fff', letterSpacing: '-0.5px' }}
    >
      Proje Özellikleri
    </motion.h2>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: 36,
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          variants={item}
          whileHover={{ scale: 1.045, boxShadow: `0 8px 32px ${f.color}22` }}
          style={{
            background: 'rgba(28,30,38,0.98)',
            borderRadius: 22,
            boxShadow: '0 2px 16px rgba(34,34,34,0.13)',
            padding: '38px 28px 32px 28px',
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
            border: `2.5px solid transparent`,
            borderBottom: `4px solid ${f.color}`,
            transition: 'box-shadow 0.2s, border 0.2s',
            overflow: 'hidden',
          }}
        >
          <div style={{
            background: f.bg,
            width: 48,
            height: 48,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 18,
            boxShadow: `0 2px 12px ${f.color}22`,
          }}>
            {f.icon}
          </div>
          <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: f.color, marginBottom: 10, letterSpacing: '-0.5px' }}>{f.title}</h3>
          <p style={{ color: '#f3f3f3', fontSize: 16, fontWeight: 500, marginBottom: 0 }}>{f.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Features; 