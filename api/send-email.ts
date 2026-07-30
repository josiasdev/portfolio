import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

const subjectLabels: Record<string, string> = {
  project: 'Proposta de Projeto',
  general: 'Dúvida Geral / Oportunidade',
  feedback: 'Feedback / Sugestão',
  other: 'Outro Assunto',
};

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
    const formattedSubject = subjectLabels[subject] || subject;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['josiasmartins098@gmail.com'],
      subject: `[Portfólio] ${formattedSubject} — ${name}`,
      replyTo: email,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; color: #1e293b;">
          <div style="background-color: #0f172a; padding: 24px; border-bottom: 3px solid #14b8a6;">
            <h1 style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 700;">Josias Batista — Portfólio</h1>
            <p style="color: #94a3b8; font-size: 12px; margin: 4px 0 0 0;">Nova mensagem de contato recebida</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 100px; font-weight: 600;">Nome:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Assunto:</td>
                <td style="padding: 8px 0;"><span style="background-color: #f1f5f9; border: 1px solid #cbd5e1; padding: 3px 10px; border-radius: 4px; font-size: 12px; font-weight: 600; color: #0f172a;">${formattedSubject}</span></td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
              <p style="color: #64748b; font-size: 12px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Mensagem:</p>
              <div style="padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155;">
                ${message.replace(/\n/g, '<br />')}
              </div>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 16px 24px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b;">
            <p style="margin: 0;">Mensagem enviada através de <a href="https://josias-batista-portfolio.vercel.app" style="color: #0d9488; text-decoration: none; font-weight: 600;">josias-batista-portfolio.vercel.app</a></p>
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