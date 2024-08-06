import { useState } from 'react';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const [mode, setMode] = useState(false);
  const toggleMode = () => setMode(!mode);

  return (
    <HashRouter>
      <div className={`min-h-screen ${mode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home mode={mode} toggleMode={toggleMode} />} />
            <Route path="/skills" element={<Skills mode={mode} />} />
            <Route path="/contact" element={<Contact mode={mode} />} />
            <Route path="/projects" element={<Projects mode={mode} />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
