import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import JobForm from './page/JobForm';
import ActualizarTrabajo from './page/ActualizarTrabajo';
import Trabajos from './page/Trabajos'; // Importa el nuevo componente Trabajos

const App = () => {
  const handleLogin = (userData) => {
    console.log('Usuario autenticado:', userData);
  };

  const handleRegister = (userData) => {
    console.log('Usuario registrado:', userData);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/job-form" element={<JobForm />} />
          <Route path="/actualizar-trabajo" element={<ActualizarTrabajo />} />
          {/* Ruta para el componente Trabajos */}
          <Route path="/trabajos" element={<Trabajos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
