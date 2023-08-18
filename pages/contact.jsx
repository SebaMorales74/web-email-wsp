"use client"
import React, { useState } from 'react';
import Carrusel from '../components/Carrusel';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+569');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const maxPhoneNumberLength = 12; // +569 + 8 dígitos

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phoneNumber, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSnackbarOpen(true);
        resetForm();
      } else {
        // Handle error here
      }
    } catch (error) {
      // Handle error here
    }
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const formattedNumber = '+569' + inputValue.slice(3, 12);
    setPhoneNumber(formattedNumber);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setPhoneNumber('+569');
  };

  return (
    <div>
      <Carrusel heading="Contact" message="Submit the form below for more work and quotes." />

      <div className="grid md:grid-cols-2 gap-8 p-8">
        <div className="bg-white p-8">
          <h1 className="text-2xl font-bold mb-4">BATUCO</h1>
          <h2 className="text-2xl font-bold mb-4">Cotiza con Nosotros</h2>
          <p>
            Solicita tu cotización inmediata con uno de nuestros especialistas.
            Realizamos instalación, reparación y mantención a domicilio. Contáctanos
          </p>
        </div>
        <div className="bg-white p-8">
          <h2 className="text-2xl font-bold mb-4">Contactanos</h2>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
          >
            <Alert
              onClose={() => setSnackbarOpen(false)}
              severity="success"
            >
              Su cotización fue enviada, un encargado en el área se contactará con usted.
            </Alert>
          </Snackbar>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <TextField
              label="Nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Número de Teléfono"
              type="tel"
              required
              value={phoneNumber}
              onChange={handlePhoneChange}
              fullWidth
              margin="normal"
              helperText={
                phoneNumber.length > maxPhoneNumberLength
                  ? 'Número superior a 8 dígitos'
                  : ''
              }
            />
            <TextField
              label="Mensaje"
              multiline
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              fullWidth
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
      <FloatingButton/>
      <Footer />
    </div>
  );
};

export default Contact;
