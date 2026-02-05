import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Design from './pages/Design';
import Contact from './pages/Contact';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen ${darkMode ? 'dark' : ''} w-full overflow-x-hidden`}>
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col w-full">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <main className="pt-16 flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/design" element={<Design />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
