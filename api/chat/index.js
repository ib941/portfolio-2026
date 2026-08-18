export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ success: false, message: 'Invalid request: messages array is required' });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return res.status(500).json({ success: false, message: 'Groq API key not configured' });
  }

  // Add system message at the start of the conversation
  const systemMessage = {
    role: 'system',
    content: 'You are IbrahimAI, the digital portfolio assistant for Ibrahim Alkabsi. You specialize in Generative Media, Salla E-Commerce, and AI automation. Keep your tone professional, highly technical, but approachable. If they want to hire Ibrahim, direct them to his WhatsApp or Email.'
  };

  const allMessages = [systemMessage, ...messages];

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: allMessages,
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || 'No response generated';

    return res.status(200).json({ success: true, message: botReply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Failed to process chat request' });
  }
}
