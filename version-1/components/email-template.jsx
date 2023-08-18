"use client"
import React from 'react';

export const EmailTemplate = ({
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
