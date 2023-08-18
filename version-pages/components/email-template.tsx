import React from 'react';

interface EmailTemplateProps {
  firstName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  phoneNumber,
  email,
  message,
}) => (
  <div className="bg-slate-500">
    <h1 className="text-4xl font-bold">{`Hola, has recibido un nuevo mensaje, alguien necesita contactar nuestros servicios :`}</h1>
    <p>Nombre: {firstName}</p>
    <p>Teléfono: {phoneNumber}</p>
    <p>Email: {email}</p>
    <p>Mensaje: {message}</p>
  </div>
);
