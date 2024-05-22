// App.jsx
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <Link to="/konto" className="nav-item">Konto</Link>
          <Link to="/registrere" className="nav-item">Registrere ny patient</Link>
          <Link to="/redigere" className="nav-item">Redigere patient oplysninger</Link>
          <Link to="/overvågning" className="nav-item">Overvåge skab</Link>
          <Link to="/support" className="nav-item">Support</Link>
        </header>
        <main className="main-content">
          <h1>Låsesystem</h1>
        </main>
      </div>
    </Router>
  );
}

export default App;
