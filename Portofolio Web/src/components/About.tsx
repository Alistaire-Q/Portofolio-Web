import * as React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    },
    hover: {
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (width: string) => ({
      width,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        duration: 1.5
      }
    })
  };

  return (
    <section id="about" className="section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-section)',
    }}>
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
        >
          <motion.div
            variants={titleVariants}
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            <h2 className="vertical-text" style={{ 
              fontSize: '1.2rem', 
              fontWeight: 600,
              opacity: 0.7,
              marginRight: '2rem',
              color: 'var(--color-accent)' 
            }}>
              ABOUT ME
            </h2>
            <div className="huge-text" style={{ color: 'var(--color-heading)' }}> 
              HELLO. I AM
              <br />
              Qolby Sumarra Satriawan
            </div>
          </motion.div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap' }}>
            <motion.div
              variants={textVariants}
              whileHover="hover"
              style={{ 
                maxWidth: '50%', 
                flex: '1 1 400px',
                background: 'rgba(255, 255, 255, 0.5)', 
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-md)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem', 
                lineHeight: 1.8,
                color: 'var(--color-text)'
              }}>
                As a software developer currently pursuing my vocational high school education (SMK) with a major in Software and Game Development (PPLG), I am dedicated to integrating code and strategic vision to design future technological solutions. With a strong foundation in the principles of software and game development, I have a keen focus on the advancement of Artificial Intelligence (AI) as a means for transformative innovation. 
              </p>
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem', 
                lineHeight: 1.8,
                color: 'var(--color-text)' 
              }}>
                I am committed to continuously honing my technical and analytical skills, driven by the conviction that technology, particularly AI, holds significant potential to enhance human quality of life. [3] Through dedication to learning and innovative application, I aim to contribute to building a future where technology empowers and uplifts humanity.
              </p>
            </motion.div>
            
            <motion.div
              variants={textVariants}
              style={{ 
                flex: '1 1 400px',
                background: 'rgba(255, 255, 255, 0.5)', 
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-md)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: 'var(--color-heading)' }}>
                SKILLS
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '0.5rem',
                    color: 'var(--color-text)' 
                  }}>
                    <span>Python</span>
                    <span>Beginner</span>
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '8px', 
                    backgroundColor: 'rgba(92, 190, 203, 0.2)',
                    position: 'relative',
                    borderRadius: '4px', 
                    overflow: 'hidden'
                  }}>
                    <motion.div 
                      custom="40%"
                      variants={skillBarVariants}
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        backgroundColor: 'var(--color-accent)', 
                        borderRadius: '4px' 
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '0.5rem',
                    color: 'var(--color-text)' 
                  }}>
                    <span>AI Concepts</span>
                    <span>Learning</span>
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '8px', 
                    backgroundColor: 'rgba(92, 190, 203, 0.2)', 
                    position: 'relative',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <motion.div 
                      custom="20%"
                      variants={skillBarVariants}
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        backgroundColor: 'var(--color-accent)', 
                        borderRadius: '4px' 
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '0.5rem',
                    color: 'var(--color-text)' 
                  }}>
                    <span>Problem Solving</span>
                    <span>Intermediate</span>
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '8px', 
                    backgroundColor: 'rgba(92, 190, 203, 0.2)', 
                    position: 'relative',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <motion.div 
                      custom="60%"
                      variants={skillBarVariants}
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        backgroundColor: 'var(--color-accent)', 
                        borderRadius: '4px' 
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
