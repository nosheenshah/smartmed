// src/utils/aiMlApi.js
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function getAiMlResponse(prompt) {
  console.log("Using OpenRouter API");
  console.log("API Key:", API_KEY ? "Loaded" : "Missing");

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": "http://localhost:5173", // آپ کی ویب سائٹ کا ایڈریس
        "X-Title": "SmartMed AI Assistant" // آپ کے پروجیکٹ کا نام
      },
      body: JSON.stringify({
        model: "openai/gpt-4o",
        messages: [
          {
            role: "system",
            content: "آپ ایک میڈیکل اسسٹنٹ ہیں، SmartMed Clinic کے لیے۔ صرف میڈیکل سوالات کے جواب دیں۔ جواب 2-3 جملوں میں دیں، سادہ اور دوستانہ انداز میں۔"
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    console.log("Response status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter Error:", response.status, errorText);
      return "AI سروس سے رابطہ نہیں ہو سکا۔ براہ کرم بعد میں کوشش کریں۔";
    }

    const data = await response.json();
    console.log("AI Response:", data);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Fetch Error:", error);
    return "نیٹ ورک کی خرابی۔ کنسول چیک کریں۔";
  }
}