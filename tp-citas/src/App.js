import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Listado from './components/Listado';
import './App.css';

const App = () => {
  const [registros, setRegistros] = useState([]);

  function añadirRegistro(registro){
    setRegistros([registros, registro]);
  };

  return (
    <div className="App">
      <h1>Registro de Mascotas</h1>
      <Form añadirRegistro={añadirRegistro} />
      <Listado registros={registros} />
    </div>
  );
}

export default App;

