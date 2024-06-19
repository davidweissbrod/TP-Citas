import React from 'react';
import CardCita from './CardCita';

const Listado = ({ registros, eliminarRegistro }) => {
  return (
    <div className="cards-container">
      {registros.map((registro, index) => (
        <CardCita key={index} registro={registro} onDelete={() => eliminarRegistro(index)}/>
      ))}
    </div>
  );
};

export default Listado;
