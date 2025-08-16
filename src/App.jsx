import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Import routes

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWigs from './components/FeaturedWigs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';



// Create a Home component to group all homepage content
const Home = () => (
  <>
    <Hero />
    <FeaturedWigs />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />   
      </Routes>
    </Router>
  );
}

export default App;
