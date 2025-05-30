import * as React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: 0.4
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.1 * index
      }
    }),
    focus: {
      scale: 1.02,
      boxShadow: '0 0 0 2px rgba(92, 190, 203, 0.3)',
      borderColor: 'var(--color-accent)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: '0 8px 16px rgba(92, 190, 203, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const socialLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.6 + (0.1 * index)
      }
    }),
    hover: {
      y: -5,
      color: 'var(--color-accent)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section id="contact" className="section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: '4rem',
      background: 'var(--gradient-section)', // Updated to mint gradient
    }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={titleVariants}
            style={{ marginBottom: '4rem' }}
          >
            <h2 className="huge-text" style={{ color: 'var(--color-heading)' }}>CONTACT ME</h2>
            <p style={{ 
              fontSize: '1.2rem',
              maxWidth: '600px',
              marginTop: '2rem',
              lineHeight: 1.8,
              color: 'var(--color-text)' 
            }}>
              Jika Anda tertarik untuk berkolaborasi atau memiliki pertanyaan, jangan ragu untuk menghubungi saya melalui salah satu platform berikut.
            </p>
          </motion.div>
          
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <motion.div
              variants={formVariants}
              style={{ 
                flex: '1 1 400px',
                background: 'rgba(255, 255, 255, 0.5)', 
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-md)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <motion.div
                  custom={0}
                  variants={inputVariants}
                >
                  <label htmlFor="name" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontSize: '0.9rem', 
                    color: 'var(--color-heading)',
                    fontWeight: 600
                  }}>
                    NAME
                  </label>
                  <motion.input 
                    whileFocus="focus"
                    type="text" 
                    id="name" 
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid rgba(92, 190, 203, 0.3)', 
                      borderRadius: '8px',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      transition: 'var(--transition-normal)'
                    }}
                  />
                </motion.div>
                
                <motion.div
                  custom={1}
                  variants={inputVariants}
                >
                  <label htmlFor="email" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontSize: '0.9rem', 
                    color: 'var(--color-heading)',
                    fontWeight: 600
                  }}>
                    EMAIL
                  </label>
                  <motion.input 
                    whileFocus="focus"
                    type="email" 
                    id="email" 
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid rgba(92, 190, 203, 0.3)',
                      borderRadius: '8px',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      transition: 'var(--transition-normal)'
                    }}
                  />
                </motion.div>
                
                <motion.div
                  custom={2}
                  variants={inputVariants}
                >
                  <label htmlFor="message" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontSize: '0.9rem', 
                    color: 'var(--color-heading)',
                    fontWeight: 600
                  }}>
                    MESSAGE
                  </label>
                  <motion.textarea 
                    whileFocus="focus"
                    id="message" 
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid rgba(92, 190, 203, 0.3)', 
                      borderRadius: '8px',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'var(--transition-normal)'
                    }}
                  />
                </motion.div>
                
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="button"
                  style={{ 
                    alignSelf: 'flex-start',
                    padding: '1rem 2.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginTop: '1rem',
                    backgroundColor: 'var(--color-button)', 
                    boxShadow: '0 4px 15px rgba(92, 190, 203, 0.3)' 
                  }}
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div
              variants={infoVariants}
              style={{ 
                flex: '1 1 300px',
                background: 'rgba(255, 255, 255, 0.5)', 
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-md)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  marginBottom: '1rem',
                  color: 'var(--color-heading)'
                }}>
                  CONTACT INFO
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--color-accent)', 
                      marginBottom: '0.3rem',
                      fontWeight: 600
                    }}>
                      EMAIL
                    </div>
                    <div style={{ 
                      fontSize: '1.1rem',
                      color: 'var(--color-text)' 
                    }}>
                      qolbysumarrasatriawan@gmail.com
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--color-accent)', 
                      marginBottom: '0.3rem',
                      fontWeight: 600
                    }}>
                      PHONE
                    </div>
                    <div style={{ 
                      fontSize: '1.1rem',
                      color: 'var(--color-text)' 
                    }}>
                      +62 877-7641-7471
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--color-accent)', 
                      marginBottom: '0.3rem',
                      fontWeight: 600
                    }}>
                      LOCATION
                    </div>
                    <div style={{ 
                      fontSize: '1.1rem',
                      color: 'var(--color-text)'
                    }}>
                      Indonesia, Jakarta
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  marginBottom: '1rem',
                  color: 'var(--color-heading)' 
                }}>My Social Media</h3>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'var(--color-heading)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  SOCIAL MEDIA
                </h3>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <motion.a
                    custom={0}
                    variants={socialLinkVariants}
                    whileHover="hover"
                    href="#"
                    style={{ 
                      fontSize: '1.1rem', 
                      position: 'relative',
                      color: 'var(--color-text)' 
                    }}
                  >
                    Instagram
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
                  
                  <motion.a
                    custom={1}
                    variants={socialLinkVariants}
                    whileHover="hover"
                    href="https://www.instagram.com/alistaire_c/profilecard/?igsh=c3p2NTBiajNxc2Q="
                    style={{ 
                      fontSize: '1.1rem', 
                      position: 'relative',
                      color: 'var(--color-text)' 
                    }}
                  >
                    GitHub
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
                  
                  <motion.a
                    custom={2}
                    variants={socialLinkVariants}
                    whileHover="hover"
                    href="https://github.com/Alistaire-Q"
                    style={{ 
                      fontSize: '1.1rem', 
                      position: 'relative',
                      color: 'var(--color-text)' 
                    }}
                  >
                    LinkedIn
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

                  <motion.a
                    custom={3}
                    variants={socialLinkVariants}
                    whileHover="hover"
                    href="https://www.linkedin.com/in/qolby-sumarra-satriawan-937a7b34a"
                    style={{ 
                      fontSize: '1.1rem', 
                      position: 'relative',
                      color: 'var(--color-text)' 
                    }}
                  >
                    LinkedIn
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
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
