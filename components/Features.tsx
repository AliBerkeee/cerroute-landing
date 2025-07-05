import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiUsers, FiMessageCircle, FiClock, FiGlobe, FiCheckSquare, FiCpu } from 'react-icons/fi';

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

const Solutions = () => (
  <section id="solutions" style={{ background: '#FAFAFA', padding: '72px 0 48px 0', minHeight: 400 }}>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 800, marginBottom: 18, color: '#FF9900', letterSpacing: '-0.5px' }}
    >
      Çözümler
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', fontSize: '1.08rem', color: '#444', fontWeight: 500, marginBottom: 38, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}
    >
      CeRRoute, eğitimde karşılaşılan temel sorunlara yenilikçi çözümler sunar.
    </motion.p>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 32,
        maxWidth: 1000,
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
            background: '#fff',
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
          <p style={{ color: '#222', fontSize: 16, fontWeight: 500, marginBottom: 0 }}>{f.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const faq = [
  { q: 'CeRRoute nedir?', a: 'CeRRoute, modern ve yapay zeka destekli bir eğitim platformudur.' },
  { q: 'Kimler katılabilir?', a: 'Her yaştan ve seviyeden kullanıcı katılabilir.' },
  { q: 'Kayıt olmak ücretli mi?', a: 'Lansman döneminde erken kayıt ücretsizdir.' },
  { q: 'İçerikler nasıl sunuluyor?', a: 'Video, canlı yayın ve interaktif materyallerle.' },
];

const Faq = () => (
  <section id="faq" style={{ background: '#FAFAFA', padding: '72px 0 48px 0', minHeight: 400 }}>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 800, marginBottom: 18, color: '#FF9900', letterSpacing: '-0.5px' }}
    >
      Sıkça Sorulan Sorular
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', fontSize: '1.08rem', color: '#444', fontWeight: 500, marginBottom: 34, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}
    >
      CeRRoute hakkında en çok merak edilenleri burada bulabilirsin.
    </motion.p>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 28,
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      {faq.map((f, i) => (
        <motion.div
          key={f.q}
          variants={item}
          whileHover={{ scale: 1.045, boxShadow: '0 8px 32px #FF990022' }}
          style={{
            background: '#fff',
            borderRadius: 22,
            boxShadow: '0 2px 16px rgba(34,34,34,0.13)',
            padding: '32px 28px 28px 28px',
            minHeight: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '2.5px solid transparent',
            borderBottom: '4px solid #FF9900',
            transition: 'box-shadow 0.2s, border 0.2s',
            overflow: 'hidden',
          }}
        >
          <div style={{ marginBottom: 14 }}>{f.q}</div>
          <div style={{ color: '#222', fontSize: 16, fontWeight: 500 }}>{f.a}</div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const Features = () => (
  <>
    <section id="features" style={{ background: '#FAFAFA', padding: '72px 0 48px 0', minHeight: 600 }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 6vw, 2.3rem)', fontWeight: 800, marginBottom: 18, color: '#FF9900', letterSpacing: '-0.5px' }}
      >
        Neden Cerroute?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontSize: 'clamp(1rem, 3vw, 1.15rem)', color: '#444', fontWeight: 500, marginBottom: 38, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', padding: '0 16px' }}
      >
        CeRRoute, modern ve yapay zeka destekli eğitim yaklaşımıyla, kişiselleştirilmiş ve erişilebilir bir öğrenme deneyimi sunar.
      </motion.p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 80vw, 290px), 1fr))',
          gap: 'clamp(24px, 6vw, 36px)',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 16px)',
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={item}
            whileHover={{ scale: 1.045, boxShadow: `0 8px 32px ${f.color}22` }}
            style={{
              background: '#fff',
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
            <p style={{ color: '#222', fontSize: 16, fontWeight: 500, marginBottom: 0 }}>{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Solutions />
    <Faq />
  </>
);

export default Features; 