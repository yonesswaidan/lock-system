import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/konto" className="nav-item">Konto</Link>
      <Link to="/register" className="nav-item">Registrere ny patient</Link>
      <Link to="/edit" className="nav-item">Redigere patient oplysninger</Link>
      <Link to="/monitor" className="nav-item">Overvåge skab</Link>
      <Link to="/support" className="nav-item">Support</Link>
    </header>
  );
};

export default Header;
