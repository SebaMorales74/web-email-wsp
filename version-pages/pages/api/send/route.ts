import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';

const API_KEY = 're_DqxUKYtt_PsPK4JyYZp6hLgRPvViA2rar'; // Reemplaza con tu API Key

const resend = new Resend(API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phoneNumber, message } = req.body;

      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['alanm.q.4@gmail.com'],
        subject: 'Nuevo mensaje de contacto',
        react: EmailTemplate({ firstName: name, phoneNumber, email, message }),
        text: '',
      });

      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error });
    }
  }


}
