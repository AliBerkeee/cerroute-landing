import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { 
    title: 'Yapay Zeka Destekli Öğrenme', 
    desc: 'Kişiselleştirilmiş öğrenme yolları ve akıllı içerik önerileri ile her öğrencinin potansiyelini maksimize ediyoruz.',
    gradient: 'linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)',
    accent: '#FF9900',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L20 8L16 12L12 8L16 4Z" fill="currentColor"/>
        <path d="M8 12L12 16L8 20L4 16L8 12Z" fill="currentColor"/>
        <path d="M24 12L28 16L24 20L20 16L24 12Z" fill="currentColor"/>
        <path d="M16 20L20 24L16 28L12 24L16 20Z" fill="currentColor"/>
        <circle cx="16" cy="16" r="2" fill="currentColor"/>
      </svg>
    )
  },
  { 
    title: 'Erişilebilir Eğitim', 
    desc: 'Sesli komutlar, gelişmiş betimleme ve çoklu format desteği ile herkes için erişilebilir öğrenme deneyimi.',
    gradient: 'linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)',
    accent: '#FF9900',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8H24V24H8V8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 12H20" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 16H20" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 20H16" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
      </svg>
    )
  },
  { 
    title: 'Etkileşimli Öğrenme', 
    desc: 'Gamified quizler, canlı tartışmalar ve gerçek zamanlı geri bildirimler ile öğrenmeyi etkileşimli hale getiriyoruz.',
    gradient: 'linear-gradient(135deg, #0099FF 0%, #66B3FF 100%)',
    accent: '#0099FF',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 12L20 20" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 12L12 20" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
      </svg>
    )
  },
  { 
    title: 'Canlı Mentorluk', 
    desc: 'Uzman eğitmenlerle birebir veya küçük grup oturumları ile derinlemesine öğrenme fırsatları.',
    gradient: 'linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)',
    accent: '#FF9900',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L20 12L16 20L12 12L16 4Z" fill="currentColor"/>
        <path d="M8 16L12 24L8 32L4 24L8 16Z" fill="currentColor"/>
        <path d="M24 16L28 24L24 32L20 24L24 16Z" fill="currentColor"/>
        <circle cx="16" cy="16" r="3" fill="currentColor"/>
      </svg>
    )
  },
  { 
    title: 'Çevrimdışı Erişim', 
    desc: 'İnternet bağlantısı olmadan da eğitim materyallerine erişim sağlayarak kesintisiz öğrenme.',
    gradient: 'linear-gradient(135deg, #0099FF 0%, #66B3FF 100%)',
    accent: '#0099FF',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8H24V24H8V8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 12H20" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 16H20" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 20H16" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 4L28 28" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <path d="M28 4L4 28" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
      </svg>
    )
  },
  { 
    title: 'İlerleme Takibi', 
    desc: 'Detaylı analitikler ve görsel raporlarla öğrenme sürecini ve gelişimi kolayca takip edin.',
    gradient: 'linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)',
    accent: '#FF9900',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 28L12 20L20 24L28 12" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="20" r="2" fill="currentColor"/>
        <circle cx="20" cy="24" r="2" fill="currentColor"/>
        <circle cx="28" cy="12" r="2" fill="currentColor"/>
        <path d="M4 4H28" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 8H24" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>
    )
  },
];

// Apple-style animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] // Apple's custom easing
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      scale: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1] // Bounce effect
      }
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(5px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const iconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    rotate: -180
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.2
    }
  }
};

const Solutions = () => (
  <section id="solutions" style={{ background: '#FAFAFA', padding: '80px 0 60px 0', minHeight: 400 }}>
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ textAlign: 'center', fontSize: '2.4rem', fontWeight: 800, marginBottom: 20, color: '#FF9900', letterSpacing: '-1px' }}
    >
      Çözümler
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', fontWeight: 400, marginBottom: 50, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}
    >
      Eğitimde karşılaşılan temel sorunlara yenilikçi ve sürdürülebilir çözümler sunuyoruz.
    </motion.p>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 40,
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 20px',
      }}
    >
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          variants={cardVariants}
          whileHover={{ 
            y: -16,
            scale: 1.03,
            transition: { 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          style={{
            background: 'rgba(20, 20, 20, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: 24,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '48px 40px',
            minHeight: 280,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
          }}
        >
          <motion.div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60%',
              background: f.gradient,
              opacity: 0.15,
              filter: 'blur(40px)',
            }}
            animate={{
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            variants={iconVariants}
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: f.gradient,
              marginBottom: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
              color: '#fff',
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            {f.icon}
          </motion.div>
          <motion.h3 
            variants={textVariants}
            style={{ 
              fontSize: '1.75rem', 
              fontWeight: 600, 
              color: '#fff', 
              marginBottom: 20, 
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
              position: 'relative',
              zIndex: 2
            }}
          >
            {f.title}
          </motion.h3>
          <motion.p 
            variants={textVariants}
            style={{ 
              color: '#ccc', 
              fontSize: '1.1rem', 
              fontWeight: 400, 
              marginBottom: 0,
              lineHeight: 1.6,
              position: 'relative',
              zIndex: 2
            }}
          >
            {f.desc}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const faq = [
  { 
    q: 'CeRRoute nasıl çalışır?', 
    a: 'Yapay zeka destekli algoritmalarımız öğrenme stilini analiz eder ve kişiselleştirilmiş içerik önerileri sunar. Canlı oturumlar ve etkileşimli materyallerle öğrenme sürecini destekleriz.' 
  },
  { 
    q: 'Hangi yaş grupları için uygun?', 
    a: 'İlkokuldan üniversiteye, hatta yetişkin eğitimine kadar her yaş grubuna uygun içerik ve öğrenme yöntemleri sunuyoruz.' 
  },
  { 
    q: 'Teknik gereksinimler neler?', 
    a: 'Modern bir web tarayıcısı ve internet bağlantısı yeterli. Mobil uygulamamız da yakında kullanıma açılacak.' 
  },
  { 
    q: 'İçerik kalitesi nasıl garanti ediliyor?', 
    a: 'Tüm içeriklerimiz uzman eğitmenler tarafından hazırlanır ve sürekli güncellenir. Kalite kontrol süreçlerimizle en yüksek standartları koruyoruz.' 
  },
];

const Faq = () => (
  <section id="faq" style={{ background: '#FAFAFA', padding: '80px 0 60px 0', minHeight: 400 }}>
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ textAlign: 'center', fontSize: '2.4rem', fontWeight: 800, marginBottom: 20, color: '#FF9900', letterSpacing: '-1px' }}
    >
      Sıkça Sorulan Sorular
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', fontWeight: 400, marginBottom: 50, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}
    >
      CeRRoute hakkında merak edilen soruların detaylı cevapları.
    </motion.p>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: 32,
        maxWidth: 1000,
        margin: '0 auto',
        padding: '0 20px',
      }}
    >
      {faq.map((f, i) => (
        <motion.div
          key={f.q}
          variants={cardVariants}
          whileHover={{ 
            y: -12,
            scale: 1.02,
            transition: { 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          style={{
            background: 'rgba(20, 20, 20, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: 20,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '40px 36px',
            minHeight: 160,
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          <motion.div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)',
              opacity: 0.1,
              filter: 'blur(30px)',
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.h4 
            variants={textVariants}
            style={{ 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              color: '#fff', 
              marginBottom: 16,
              lineHeight: 1.3,
              position: 'relative',
              zIndex: 2
            }}
          >
            {f.q}
          </motion.h4>
          <motion.p 
            variants={textVariants}
            style={{ 
              color: '#ccc', 
              fontSize: '1rem', 
              fontWeight: 400,
              lineHeight: 1.6,
              margin: 0,
              position: 'relative',
              zIndex: 2
            }}
          >
            {f.a}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const Features = () => (
  <>
    <section id="features" style={{ background: '#FAFAFA', padding: '80px 0 60px 0', minHeight: 600 }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', fontSize: 'clamp(2rem, 6vw, 2.6rem)', fontWeight: 800, marginBottom: 20, color: '#FF9900', letterSpacing: '-1px' }}
      >
        Neden CeRRoute?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: '#666', fontWeight: 400, marginBottom: 50, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', padding: '0 20px', lineHeight: 1.6 }}
      >
        Modern teknoloji ve pedagojik yaklaşımları birleştirerek, her öğrencinin potansiyelini keşfetmesini sağlıyoruz.
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 80vw, 320px), 1fr))',
          gap: 'clamp(24px, 6vw, 40px)',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 20px)',
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={cardVariants}
            whileHover={{ 
              y: -16,
              scale: 1.03,
              transition: { 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            whileTap={{ 
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
            style={{
              background: 'rgba(20, 20, 20, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 24,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '48px 40px',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
            }}
          >
            <motion.div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: f.gradient,
                opacity: 0.15,
                filter: 'blur(40px)',
              }}
              animate={{
                opacity: [0.15, 0.25, 0.15],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              variants={iconVariants}
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: f.gradient,
                marginBottom: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
                color: '#fff',
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              {f.icon}
            </motion.div>
            <motion.h3 
              variants={textVariants}
              style={{ 
                fontSize: '1.75rem', 
                fontWeight: 600, 
                color: '#fff', 
                marginBottom: 20, 
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
                position: 'relative',
                zIndex: 2
              }}
            >
              {f.title}
            </motion.h3>
            <motion.p 
              variants={textVariants}
              style={{ 
                color: '#ccc', 
                fontSize: '1.1rem', 
                fontWeight: 400, 
                marginBottom: 0,
                lineHeight: 1.6,
                position: 'relative',
                zIndex: 2
              }}
            >
              {f.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Solutions />
    <Faq />
  </>
);

export default Features; 