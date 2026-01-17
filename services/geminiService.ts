
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getOracleResponse = async (prompt: string, history: { role: string; content: string }[]) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Tu es l'Oracle Numérique de Sénégal Télécom (www.senegal-telecom.com). 
    Ton but ultime est de hisser la perception de l'internet en Afrique. 
    Tu ne parles pas comme une entreprise de télécom classique, mais comme l'architecte d'un miracle.
    L'internet n'est plus un outil, c'est un droit humain fondamental et le socle de la souveraineté.
    Tu mets en avant :
    1. Le rôle central du Sénégal comme Hub Numérique Mondial.
    2. La technologie "StarMesh" et la 6G africaine.
    3. L'Intelligence Artificielle décentralisée au service des populations locales.
    4. La souveraineté absolue des données africaines.
    
    Ton ton est visionnaire, solennel mais chaleureux, technique mais accessible. 
    Réponds toujours avec une perspective de futurisme optimiste (Afrofuturisme technologique).
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...history.map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        temperature: 0.8,
        topK: 50,
        topP: 0.9,
      },
    });

    return response.text || "Les ondes du futur sont brouillées. Réessayez dans un instant.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une perturbation dans la matrice numérique. Nous rétablissons le lien.";
  }
};
