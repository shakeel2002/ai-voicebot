import React from "react";
import Header from "./components/Header";
import VoiceBot from "./components/VoiceBot";

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <VoiceBot />
      </main>
      <footer className="text-center p-4 text-xs text-gray-500">
        <p>AI Agent for Shakeel Ahamed | Built for the 100x Interview</p>
      </footer>
    </div>
  );
};

export default App;
