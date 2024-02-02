import React from "react";
import { AiChat } from "@nlux/react";
import { useAdapter } from "@nlux/openai-react";
import "@nlux/themes/nova.css";

interface OpenAIAdapterProps {
  show: boolean;
  temperature?: number;
  // Include other props as needed
}

export const OpenAIAdapter: React.FC<OpenAIAdapterProps> = ({
  show,
  temperature,
}) => {
  // Config should use the props if needed
  const adapterConfig = {
    apiKey: "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",
    systemMessage:
      "Give sound, tailored financial advice. Explain concepts simply. " +
      "Write concise answers under 5 sentences. Be funny.",
    // Use temperature or other props in config if applicable and supported
  };

  const chatGptAdapter = useAdapter(adapterConfig);

  // Corrected conditional rendering
  return show ? (
    <AiChat
      adapter={chatGptAdapter}
      promptBoxOptions={{ placeholder: "How can I help you today?" }}
    />
  ) : null;
};

export default OpenAIAdapter;
