import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ añadirRegistro }) => {
  const [mascota, setMascota] = useState('');
  const [dueño, setDueño] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = () => {
    const nuevoRegistro = { mascota, dueño, fecha, hora, sintomas };
    console.log('Nuevo Registro:', nuevoRegistro);
    añadirRegistro(nuevoRegistro);
    setMascota('');
    setDueño('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formMascota">
        <Form.Label>Mascota</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre de la mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDueño">
        <Form.Label>Dueño</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre del dueño"
          value={dueño}
          onChange={(e) => setDueño(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFecha">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formHora">
        <Form.Label>Hora</Form.Label>
        <Form.Control
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formSintomas">
        <Form.Label>Síntomas</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Síntomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Añadir Cita
      </Button>
    </Form>
  );
};

export default Formulario;
