import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === '') {
    console.error('Missing or empty RESEND_API_KEY environment variable');
    return res.status(500).json({
      error: 'Configuração pendente',
      details: 'A chave RESEND_API_KEY está vazia ou não foi configurada nas Variáveis de Ambiente da Vercel.',
    });
  }

  try {
    const resend = new Resend(apiKey.trim());
    const result = contactFormSchema.safeParse(req.body);

    if (!result.success) {
      console.error('Validation Error:', result.error.format());
      return res
        .status(400)
        .json({ error: 'Dados inválidos', details: result.error.format() });
    }

    const { name, email, subject, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['josiasmartins098@gmail.com'],
      subject: `Nova Mensagem do Portfólio: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0d9488;">Nova Mensagem do Portfólio</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px; background: #f8fafc;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res
        .status(500)
        .json({ error: 'Falha ao enviar e-mail via Resend', details: error.message });
    }

    return res.status(200).json({ message: 'Email enviado com sucesso!', data });
  } catch (error) {
    console.error('Server Error:', error);
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ error: 'Erro Interno no Servidor', details: error.message });
    }
    return res.status(500).json({ error: 'Erro Interno no Servidor' });
  }
}