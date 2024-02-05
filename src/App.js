import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import JobForm from './page/JobForm';
import ActualizarTrabajo from './page/ActualizarTrabajo';
import Trabajos from './page/Trabajos';
import TablaMecanicos from './page/TablaMecanicos';
import EditMechanicForm from './page/EditMechanicForm';
import EditJobForm from './page/EditJobForm'; // Asegúrate de que la ruta de importación sea correcta

const App = () => {
  const handleLogin = (userData) => {
    console.log('Usuario autenticado:', userData);
  };

  const handleRegister = (userData) => {
    console.log('Usuario registrado:', userData);
  };

  const handleCancelEdit = () => {
    console.log('Edición cancelada'); // Implementa la lógica según sea necesario
  };

  const handleEditMechanic = (mechanicData) => {
    console.log('Datos del mecánico editados:', mechanicData); // Implementa la lógica según sea necesario
  };

  const handleSaveJob = (jobData) => {
    console.log('Datos del trabajo guardados:', jobData); // Implementa la lógica según sea necesario
  };

  // Asumiendo que tienes algún estado o manera de obtener los datos del mecánico y trabajo actual
  const mechanicData = {}; // Deberás reemplazar esto con los datos reales del mecánico
  const jobData = {}; // Deberás reemplazar esto con los datos reales del trabajo

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/job-form" element={<JobForm />} />
          <Route path="/actualizar-trabajo" element={<ActualizarTrabajo />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/tabla-mecanicos" element={<TablaMecanicos />} />
          <Route path="/editar-mecanico" element={
            <EditMechanicForm 
              mechanicData={mechanicData} 
              onCancel={handleCancelEdit} 
              onEdit={handleEditMechanic} 
            />} 
          />
          <Route path="/editar-trabajo" element={
            <EditJobForm 
              jobData={jobData} 
              onCancel={handleCancelEdit} 
              onSave={handleSaveJob}
            />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
