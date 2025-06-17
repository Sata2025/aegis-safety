import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Investigacion from './pages/Investigacion';
import Matriz from './pages/Matriz';
import Inspecciones from './pages/Inspecciones';
import Documentos from './pages/Documentos';
import Contratistas from './pages/Contratistas';
import Prediccion from './pages/Prediccion';
import BaseDatos from './pages/BaseDatos';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <h2>AEGIS Safety</h2>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/investigacion">Investigación de Accidentes</Link></li>
            <li><Link to="/matriz">Matriz de Riesgos</Link></li>
            <li><Link to="/inspecciones">Inspecciones de Seguridad</Link></li>
            <li><Link to="/documentos">Gestión Documental</Link></li>
            <li><Link to="/contratistas">Gestión de Contratistas</Link></li>
            <li><Link to="/prediccion">Predicción de Accidentes</Link></li>
            <li><Link to="/basedatos">Base de Datos Laboral</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/investigacion" element={<Investigacion />} />
            <Route path="/matriz" element={<Matriz />} />
            <Route path="/inspecciones" element={<Inspecciones />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/contratistas" element={<Contratistas />} />
            <Route path="/prediccion" element={<Prediccion />} />
            <Route path="/basedatos" element={<BaseDatos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
