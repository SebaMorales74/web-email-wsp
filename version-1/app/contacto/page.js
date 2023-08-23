"use client";
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';



export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+569');
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const maxPhoneNumberLength = 12; // +569 + 8 dígitos


    const theme = createTheme({
        palette: {
            primary: {
                main: '#959595',
                // light: will be calculated from palette.primary.main,
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                main: '#cccccc',
                light: '#a9a9a9',
                contrastText: '#4e4e4e',
            },
        },
    });

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
        <ThemeProvider theme={theme}>
            <div className="grid md:grid-cols-2 gap-8 p-8 text-black">
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
                    <form onSubmit={handleSubmit} className="max-w-full">
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
                            variant="contained"
                            color="secondary"
                            startIcon={<EmailIcon />}
                            fullWidth
                        >
                            Enviar
                        </Button>
                    </form>
                </div>
            </div>
        </ThemeProvider>
    )
}