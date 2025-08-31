// src/utils/aiMlApi.js
import { OpenAI } from 'openai';

// OpenAI کے ساتھ مطابقت رکھنے والا کلائنٹ
const openai = new OpenAI({
  baseURL: 'https://api.aimlapi.com/v1',
  apiKey: import.meta.env.VITE_AIML_API_KEY,
  dangerouslyAllowBrowser: true // ⚠️ صرف ڈویلپمنٹ کے لیے
});

export async function getAiMlResponse(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'آپ ایک میڈیکل اسسٹنٹ ہیں، SmartMed Clinic کے لیے۔ صرف میڈیکل سوالات کے جواب دیں۔ جواب 2-3 جملوں میں دیں، سادہ اور دوستانہ انداز میں۔'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 200
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('AI API Error:', error);
    return 'میں ابھی جواب نہیں دے سکتا۔ براہ کرم دوبارہ کوشش کریں۔';
  }
}