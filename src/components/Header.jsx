import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/img/logoblanc.png" alt="Logo" />
      </div>
      <div className="title">
        <h1>Marseille</h1>
        <h2 className="yellow-text">Unité Spéciale</h2>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">World Map</a></li>
          <li><a href="#">Criminal List</a></li>
          <li><a href="#">Report</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
