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
    return data.choices[0].message.content;
  } catch (error) {
    console.error('AI API Error:', error);
    return 'میں ابھی جواب نہیں دے سکتا۔ براہ کرم دوبارہ کوشش کریں۔';
  }
}