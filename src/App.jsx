import React from 'react';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import About from './pages/About';
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;