import React from 'react';
import './styles.css'; 

function MonitoringPage() {
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
                <section className="monitoring-section">
                    <table className="skab-table">
                        <thead>
                            <tr>
                                <th>Skab ID</th>
                                <th>Placering</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Skab001</td>
                                <td>Afdeling A - Stue 1</td>
                                <td>Låst</td>
                            </tr>
                            <tr>
                                <td>Skab002</td>
                                <td>Afdeling A - Stue 2</td>
                                <td>Åben</td>
                            </tr>
                            {}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default MonitoringPage;
