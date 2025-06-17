import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
const logo = import.meta.env.BASE_URL + 'logo-aegis.png';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      navigate('/dashboard');
    } else {
      alert('Credenciales inválidas. Intente nuevamente.');
    }
  };

  const handleForgotPassword = () => {
    alert('Por favor, contacte al administrador para restablecer su contraseña.');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="AEGIS Logo" className="logo" />
        <h2>Ingreso a AEGIS Safety</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuario</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="login-button">Ingresar</button>
        </form>
        <div className="forgot-password" onClick={handleForgotPassword}>¿Olvidaste tu contraseña?</div>
      </div>
    </div>
  );
}

export default LoginPage;
