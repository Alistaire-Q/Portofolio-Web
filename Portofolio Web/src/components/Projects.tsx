import * as React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const projectCardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 5 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: index * 0.2
      }
    }),
    hover: {
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(92, 190, 203, 0.2), 0 10px 10px -5px rgba(92, 190, 203, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      filter: 'grayscale(0%)',
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const buttonVariants = {
    hover: {
      x: 10,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Game Tic-Tac-Toe',
      category: 'Game',
      image: 'https://tic-tac-vibe.netlify.app/',
      description: 'Proyek game sederhana menggunakan HTML,CSS dan Javascript.'
    },

  ];

  return (
    <section id="works" className="section" style={{ 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '8rem',
      background: 'var(--gradient-section)', 
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
            style={{ marginBottom: '4rem', display: 'flex', alignItems: 'center' }}
          >
            <div style={{ marginRight: '2rem' }}>
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ 
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                  color: 'white'
                }}
              >
                ✦
              </motion.div>
            </div>
            <h2 className="huge-text" style={{ color: 'var(--color-heading)' }}>SELECTED CASES</h2>
          </motion.div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={projectCardVariants}
                whileHover="hover"
                style={{ 
                  display: 'flex',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  gap: '4rem',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.5)', 
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-md)',
                  backdropFilter: 'blur(5px)',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: '1 1 400px' }}>
                  <motion.div
                    whileHover="hover"
                    style={{ 
                      width: '100%',
                      height: '300px',
                      overflow: 'hidden',
                      position: 'relative',
                      borderRadius: '8px',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    <motion.img 
                      variants={imageVariants}
                      src={project.image} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%)'
                      }}
                    />
                  </motion.div>
                </div>
                
                <div style={{ flex: '1 1 400px' }}>
                  <div style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--color-accent)', 
                    marginBottom: '1rem',
                    fontWeight: 600
                  }}>
                    {project.category}
                  </div>
                  <h3 className="medium-text" style={{ 
                    marginBottom: '1.5rem',
                    color: 'var(--color-heading)'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                    color: 'var(--color-text)' 
                  }}>
                    {project.description}
                  </p>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-accent)', 
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.5rem 0'
                    }}
                  >
                    VIEW PROJECT
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={titleVariants}
            style={{ 
              marginTop: '6rem',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="button"
              style={{ 
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '1px',
                backgroundColor: 'var(--color-button)', 
                boxShadow: '0 4px 15px rgba(92, 190, 203, 0.3)' 
              }}
            >
              SEE OTHER CASES
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
