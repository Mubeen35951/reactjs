import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';  // Assuming Home is a default export
import './App.css';  // Import the global CSS file
import Contact from './components/Contact';
import Projectpage from './components/Projectpage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Nav />
    <Home/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projectpages" element={<Projectpage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
