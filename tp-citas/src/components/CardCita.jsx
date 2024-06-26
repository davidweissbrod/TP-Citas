import React from 'react';
import { Card } from 'react-bootstrap';
import Boton from './Boton';

const CardCita = ({ registro, onDelete }) => {
  return (
    <>
    <Card>
      <Card.Body>
        <Card.Title>{registro.mascota}</Card.Title>
        <Card.Subtitle>Dueño: {registro.dueño}</Card.Subtitle>
        <Card.Text>
          <strong>Fecha:</strong> {registro.fecha}<br/>
          <strong>Hora:</strong> {registro.hora}<br/>
          <strong>Síntomas:</strong> {registro.sintomas}<br/>
        </Card.Text>
        <Boton color = "danger" texto = "Borrar" onClick = {onDelete}></Boton>
      </Card.Body>
    </Card>
    <br/>
    </>
  );
};

export default CardCita;
