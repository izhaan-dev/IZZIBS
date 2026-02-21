import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home';
import Services from './pages/Services';
import Domains from './pages/Domains';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

function App() {
  return (
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer /> {/* Add Footer Here */}
      </div>
  );
}

export default App;