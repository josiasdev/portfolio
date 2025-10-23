
import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai'; 
import {
  portfolioContexts,
  SupportedLanguage,
} from '../lib/portfolio-context.js'; 

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemInstructions = {
  pt: `Você é um assistente virtual amigável e profissional do portfólio de Josias Batista. Responda as perguntas do usuário baseando-se **estrita e unicamente** no contexto fornecido a seguir.
- Se a resposta estiver no contexto, responda de forma clara e concisa em português.
- Se a resposta NÃO estiver no contexto, diga: "Desculpe, eu só tenho informações sobre a carreira de Josias. Não encontrei dados sobre isso."
- Não invente informações.
- Seja sempre amigável.`,
  en: `You are a friendly and professional virtual assistant for Josias Batista's portfolio. Answer the user's questions based **strictly and solely** on the context provided below.
- If the answer is in the context, respond clearly and concisely in English.
- If the answer is NOT in the context, say: "I'm sorry, I only have information about Josias's career. I couldn't find data on that."
- Do not make up information.
- Always be friendly.`,
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, lang } = req.body;

    if (typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Invalid message provided' });
    }

    const validatedLang: SupportedLanguage =
      lang === 'en' || lang === 'pt' ? lang : 'pt';

    const systemPrompt = systemInstructions[validatedLang];
    const context = portfolioContexts[validatedLang];

    const userPrompt = `
      ---
      CONTEXTO:
      ${context}
      ---
      
      PERGUNTA DO USUÁRIO (Responda em ${
        validatedLang === 'pt' ? 'Português' : 'English'
      }):
      ${message}
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', 
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
    });

    const reply = completion.choices[0].message.content;

    return res.status(200).json({ reply: reply || 'Desculpe, não obtive uma resposta.' });

  } catch (error) {
    console.error('Error in chat API:', error);
    
    let errorMsg = 'Failed to get response from AI';
    if (error instanceof OpenAI.APIError) {
      errorMsg = error.message;
      return res.status(error.status || 500).json({
        error: errorMsg,
        details: error.code
      });
    }

    return res.status(500).json({
      error: errorMsg,
      details: error instanceof Error ? error.message : String(error),
    });
  }
}