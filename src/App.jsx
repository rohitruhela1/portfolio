import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

  return (
    <HashRouter>
      
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/3.jpg')" }}>

        <Navbar/>
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/skills" element={<Skills  />} />
            <Route path="/contact" element={<Contact  />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
