import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);


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

  try {
    const result = contactFormSchema.safeParse(req.body);

    if (!result.success) {
      console.error('Validation Error:', result.error.format());
      return res
        .status(400)
        .json({ error: 'Invalid data', details: result.error.format() });
    }

    const { name, email, subject, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['JBDevSoftware@proton.me'],
      subject: `Nova Mensagem do Portfólio: ${subject}`,

      replyTo: email,

      // O corpo do e-mail em HTML
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nova Mensagem de Contato</h2>
          <p>Você recebeu uma nova mensagem através do formulário do seu portfólio.</p>
          <hr>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="padding: 10px; border: 1px solid #ddd; border-radius: 5px; background: #f9f9f9;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
      `,
    });

    // 4. Trata erros do Resend
    if (error) {
      console.error('Resend Error:', error);
      return res
        .status(500)
        .json({ error: 'Failed to send email', details: error.message });
    }

    // 5. Envia uma resposta de sucesso
    return res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (error) {
    console.error('Server Error:', error);
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ error: 'Internal Server Error', details: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}