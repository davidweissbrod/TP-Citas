import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Form';
import Listado from './components/Listado';
import './App.css';

const App = () => {
  const [registros, setRegistros] = useState([]);

  const añadirRegistro = (registro) => {
    setRegistros([...registros, registro]);
  };
  const eliminarRegistro = (index) => {
    const nuevosRegistros = [...registros];
    nuevosRegistros.splice(index, 1);
    setRegistros(nuevosRegistros);
  };

  return (
    <div class = "container">
      <h1>Gestor de Citas Mascotas</h1>
      <div class = "formulario">
        <Formulario añadirRegistro={añadirRegistro} />
      </div>
      <br/>
      <div class = "cards">
        <Listado registros={registros} eliminarRegistro={eliminarRegistro}/> 
      </div>

    </div>
  );
}

export default App;


