import React from 'react';
import './AdminAccount.css'; 

function AdminLogin() {
    return (
        <div className="container">
            <div className="login-form">
                <h2>Admin Login</h2>
                <form action="/admin-dashboard" method="post">
                    <div className="input-group">
                        <label htmlFor="username">Brugernavn</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Adgangskode</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Log ind</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
