import React from 'react';
import CardCita from './CardCita';

const Listado = ({ registros }) => {
  return (
    <div className="cards-container">
      {registros.map((registro, index) => (
        <CardCita key={index} registro={registro} />
      ))}
    </div>
  );
};

export default Listado;