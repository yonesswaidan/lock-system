import React from 'react';
import './registrere.css'; // Assuming you have a separate CSS file

function SupportPage() {
    return (
        <div>
            <header className="navbar">
                <a href="konto.html" className="nav-item">Konto</a>
                <a href="registrere.html" className="nav-item">Registrere ny patient</a>
                <a href="redigere.html" className="nav-item">Redigere patient oplysninger</a>
                <a href="overvågning.html" className="nav-item">Overvåge skab</a>
                <a href="support.html" className="nav-item">Support</a>
            </header>
            <main className="main-content">
                <section className="support-section">
                    <h2>Tilføj en ny patient og deres skab</h2>
                    <p>Udfyld patientens oplysninger</p>
                    <form className="support-form" action="submit_support_request" method="post">
                        <label htmlFor="name">Navn:</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="email">CPR-Nummer:</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="issue">Skab nummer og lokation:</label>
                        <textarea id="issue" name="issue" rows="5" required></textarea>
                        
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default SupportPage;
