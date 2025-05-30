import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Contact />
      
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        opacity: 0.7,
        fontSize: '0.9rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Nama Saya | AI Developer Portfolio
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
