// src/utils/aiMlApi.js
export async function getAiMlResponse(prompt) {
  try {
    const response = await fetch('http://localhost:5678/webhook/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI Raw Response:", data); // Debugging

    // ✅ Safe parsing
    if (data?.choices?.length > 0 && data.choices[0]?.message?.content) {
      return data.choices[0].message.content;
    }

    if (data?.error) {
      return `❌ API Error: ${data.error.message || "Unknown error"}`;
    }

    return "⚠️ کوئی جواب نہیں ملا۔ دوبارہ کوشش کریں۔";
  } catch (error) {
    console.error('AI API Error:', error);
    return 'میں ابھی جواب نہیں دے سکتا۔ براہ کرم دوبارہ کوشش کریں۔';
  }
}
