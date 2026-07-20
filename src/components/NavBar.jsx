import React from 'react';
import '../styles/NavBar.css'; 
import logo from '../assets/logo.png'; // Логотип из папки assets

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="SpiderShiba Inu Logo" />
      </div>
      
      <ul className="navbar-links">
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#play-and-earn">Play and earn</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#partners">Partners&Investors</a></li>
        <li><a href="#why-invest">Why invest in SpiderShiba</a></li>
        <li><a href="#tokenomics">Tokenomics</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#community">Community</a></li>
      </ul>

      <button className="btn-join navbar-btn">Join Community</button>
    </nav>
  );
};

export default NavBar;