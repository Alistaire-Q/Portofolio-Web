import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  useEffect(() => {
    if (scrolled) {
      controls.start({
        height: '60px',
        background: 'rgba(230, 249, 247, 0.95)', 
        boxShadow: '0 4px 20px rgba(92, 190, 203, 0.15)',
      });
    } else {
      controls.start({
        height: '80px',
        background: 'rgba(230, 249, 247, 0.8)', 
        boxShadow: '0 2px 10px rgba(92, 190, 203, 0.1)', 
      });
    }
  }, [scrolled, controls]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0, rotateX: 90 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.1 * i,
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.1,
      color: 'var(--color-accent)',
      y: -3,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  const logoVariants = {
    hidden: { x: -50, opacity: 0, rotate: -5 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  const links = [
    { name: 'works', href: '#works' },
    { name: 'about', href: '#about' },
    { name: 'contact', href: '#contact' }
  ];

  return (
    <motion.nav
      className="navigation"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div 
        className="nav-content" 
        animate={controls}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 100,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
        }}
      >
        <motion.div 
          className="logo"
          variants={logoVariants}
          whileHover="hover"
        >
          <a href="#" style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '1px',
            color: 'var(--color-heading)',
          }}>'Qolby Sumarra Sariawan'</a>
          <div style={{ 
            fontSize: '0.8rem', 
            fontWeight: 500,
            color: 'var(--color-text)'
          }}>AI DEVELOPER</div>
        </motion.div>
        
        <div 
          style={{
            display: 'flex',
            gap: '2rem',
          }}
        >
          {links.map((link, i) => (
            <motion.a 
              key={link.name}
              href={link.href} 
              custom={i}
              variants={linkVariants}
              whileHover="hover"
              style={{ 
                position: 'relative', 
                fontSize: '0.9rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--color-text)'
              }}
            >
              <span>{link.name}</span>
              <motion.span 
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--color-accent)',
                  transformOrigin: 'left',
                  borderRadius: '2px'
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
