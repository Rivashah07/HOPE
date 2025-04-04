import { useEffect } from "react";

const AIChat = () => {
  useEffect(() => {
    // Load Botpress Webchat Script
    const botpressScript = document.createElement("script");
    botpressScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    botpressScript.async = true;
    document.body.appendChild(botpressScript);

    // Load Botpress Chatbot Configuration
    const chatbotScript = document.createElement("script");
    chatbotScript.src = "https://files.bpcontent.cloud/2025/03/08/12/20250308121351-PIK9PGVD.js";
    chatbotScript.async = true;
    document.body.appendChild(chatbotScript);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(botpressScript);
      document.body.removeChild(chatbotScript);
    };
  }, []);

  return (
    <div>
      <h2>AI Chatbot</h2>
      {/* Botpress Webchat will appear automatically */}
    </div>
  );
};

export default AIChat;
