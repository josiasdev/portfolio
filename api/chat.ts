import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { portfolioContexts } from '../src/lib/portfolio-context'; // Importa o contexto

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

const systemInstruction = `Você é um assistente virtual amigável e profissional do portfólio de Josias Batista. Responda as perguntas do usuário baseando-se **estrita e unicamente** no contexto fornecido a seguir.
- Se a resposta estiver no contexto, responda de forma clara e concisa.
- Se a resposta NÃO estiver no contexto, diga: "Desculpe, eu só tenho informações sobre a carreira de Josias Batista. Não encontrei dados sobre isso."
- Responda sempre em português.
- Não invente informações.`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message } = req.body;

    if (typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Invalid message provided' });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-pro-latest',
      systemInstruction: systemInstruction, 
    });

    const prompt = `
      ---
      CONTEXTO:
      ${portfolioContexts}
      ---
      
      PERGUNTA DO USUÁRIO:
      ${message}
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error('Error in chat API:', error);
    return res.status(500).json({
      error: 'Failed to get response from AI',
      details: error instanceof Error ? error.message : String(error),
    });
  }
}