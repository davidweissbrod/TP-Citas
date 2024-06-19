import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap'

const CardCita = ({ registro, onDelete }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{registro.mascota}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dueño: {registro.dueño}</Card.Subtitle>
        <Card.Text>
          <strong>Fecha:</strong> {registro.fecha}<br />
          <strong>Hora:</strong> {registro.hora}<br />
          <strong>Síntomas:</strong> {registro.sintomas}
        </Card.Text>
        <Button variant="danger" onClick={onDelete}>Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default CardCita;
