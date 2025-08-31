import { useState } from 'react';
import { getGeminiResponse } from '../utils/gemini';

function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'ہیلو! میں آپ کی کیسے مدد کر سکتا ہوں؟' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    const prompt = `
آپ ایک میڈیکل اسسٹنٹ ہیں، SmartMed Clinic کے لیے۔ صرف میڈیکل سوالات کے جواب دیں۔
مریض کہہ رہا ہے: "${userMessage}"
کیا یہ علامات کسی سنگین حالت کی نشاندہی کرتے ہیں؟ کون سا ڈاکٹر بہتر ہو گا؟
اگر مریض تیار ہو، تو اپائنٹمنٹ بک کرنے کی پیشکش کریں۔
جواب صرف 2-3 جملوں میں دیں، سادہ اور دوستانہ انداز میں۔
    `;

    const botReply = await getGeminiResponse(prompt);
    setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Open AI Assistant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.507 15.42 3 14.1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      ) : (
        <div className="w-80 bg-white border border-gray-300 rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">SmartMed AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-xs mb-2 ${
                  msg.role === 'bot'
                    ? 'bg-gray-200 text-gray-800 float-left clear-both'
                    : 'bg-blue-600 text-white float-right clear-both ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 italic float-left clear-both">دریافت ہو رہا ہے...</div>
            )}
            <div className="clear-both"></div>
          </div>
          <form onSubmit={handleSubmit} className="p-3 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="پیغام لکھیں..."
              className="flex-1 border border-gray-300 rounded-l px-3 py-1 focus:outline-none text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-3 py-1 rounded-r hover:bg-blue-700 disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default FloatingChatBot;