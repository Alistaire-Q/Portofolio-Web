import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleControls = useAnimation();
  const descControls = useAnimation();
  const buttonControls = useAnimation();
  const scrollControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await titleControls.start("visible");
      await descControls.start("visible");
      await buttonControls.start("visible");
      await scrollControls.start("visible");
      
      scrollControls.start({
        y: [0, -10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      });
    };
    sequence();
  }, [titleControls, descControls, buttonControls, scrollControls]);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateY: 45
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const descVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        mass: 1,
        delay: 1.2 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 1.5 
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: '0 8px 16px rgba(92, 190, 203, 0.3)', 
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const scrollVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: {
        delay: 2.0, 
        duration: 0.8
      }
    }
  };

  const titleText1 = "CREATIVE";
  const titleText2 = "AI DEVELOPER";

  return (
    <header 
      ref={headerRef}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--gradient-bg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '80px', 
      }}
    >
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {/* Left column - Title */}
          <motion.div 
            initial="hidden"
            animate={titleControls}
            variants={titleVariants}
            style={{ 
              flex: '1 1 400px',
            }}
          >
            <div
              className="huge-text"
              style={{
                textAlign: 'left',
                color: 'var(--color-heading)', 
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <motion.div style={{ display: 'flex' }}>
                {titleText1.split("").map((letter, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div style={{ display: 'flex' }}>
                {titleText2.split("").map((letter, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            <motion.div
              initial="hidden"
              animate={buttonControls}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ marginTop: '2rem', display: 'inline-block' }}
            >
              <a href="#contact" className="button">CONTACT ME</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={descControls}
            variants={descVariants}
            style={{ 
              flex: '1 1 400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <p
              style={{ 
                fontSize: '1.2rem',
                color: 'var(--color-text)',
                opacity: 0.9,
                maxWidth: '500px',
                lineHeight: '1.8',
                textAlign: 'left',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.5)', 
                borderRadius: '12px',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(92, 190, 203, 0.15)' 
              }}
            >
              Crafting Tomorrow’s Intelligence with Code and Vision 
              Advancing AI through dedication and innovation—building a future where technology uplifts humanity.
            </p>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={scrollVariants}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.8rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--color-accent)' 
        }}
      >
        Scroll Down
      </motion.div>
    </header>
  );
};

export default Header;
