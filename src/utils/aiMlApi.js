// src/utils/aiMlApi.js
export async function getAiMlResponse(prompt) {
  console.log("Sending prompt to n8n:", prompt);

  try {
    const response = await fetch('http://localhost:5678/webhook-test/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt })
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    // ✅ JSON نہیں، بلکہ ٹیکسٹ حاصل کریں
    const reply = await response.text();
    console.log("AI Reply:", reply);

    return reply;
  } catch (error) {
    console.error('AI API Error:', error);
    return 'میں ابھی جواب نہیں دے سکتا۔ براہ کرم دوبارہ کوشش کریں۔';
  }
}