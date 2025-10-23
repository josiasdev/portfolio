import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { portfolioContexts, SupportedLanguage } from '../src/lib/portfolio-context'; 

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

const systemInstructions = {
  pt: `Você é um assistente virtual amigável e profissional do portfólio de Francisco Batista. Responda as perguntas do usuário baseando-se **estrita e unicamente** no contexto fornecido a seguir.
- Se a resposta estiver no contexto, responda de forma clara e concisa em português.
- Se a resposta NÃO estiver no contexto, diga: "Desculpe, eu só tenho informações sobre a carreira de Francisco. Não encontrei dados sobre isso."
- Não invente informações.
- Seja sempre amigável.`,
  en: `You are a friendly and professional virtual assistant for Francisco Batista's portfolio. Answer the user's questions based **strictly and solely** on the context provided below.
- If the answer is in the context, respond clearly and concisely in English.
- If the answer is NOT in the context, say: "I'm sorry, I only have information about Francisco's career. I couldn't find data on that."
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

    const systemInstruction = systemInstructions[validatedLang];
    const context = portfolioContexts[validatedLang];

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash-latest',
      systemInstruction: systemInstruction, 
    });

    const prompt = `
      ---
      CONTEXTO:
      ${context}
      ---
      
      PERGUNTA DO USUÁRIO (Responda em ${
        validatedLang === 'pt' ? 'Português' : 'English'
      }):
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