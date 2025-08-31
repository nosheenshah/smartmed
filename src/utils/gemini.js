// src/utils/gemini.js
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getGeminiResponse(prompt) {
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  console.log("API URL:", API_URL);
  console.log("API Key:", API_KEY);
  console.log("Prompt:", prompt);

  const requestPayload = {
    contents: [{ parts: [{ text: prompt }] }]
  };
  
  console.log("Request payload:", requestPayload);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': API_KEY, // ← سرکاری ہیڈر
      },
      body: JSON.stringify(requestPayload),
    });

    console.log("Response:", response);
    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API Error:', response.status, errorData);
      return "I'm having trouble connecting to the AI service. Please try again.";
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Network or API Error:", error);
    return "Sorry, I couldn't process that. Please check your API key and connection.";
  }
}