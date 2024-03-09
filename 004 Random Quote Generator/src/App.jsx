import React, { useState } from "react";

const App = () => {
  // Define an array of quotes
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "The best way to predict the future is to invent it. - Alan Kay",
  ];

  // State to hold the currently displayed quote
  const [currentQuote, setCurrentQuote] = useState("");

  // Function to handle generating a random quote
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  // Initial render to display a random quote
  if (!currentQuote) {
    generateRandomQuote();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Random Quote Generator</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        onClick={generateRandomQuote}
      >
        Generate Random Quote
      </button>
      {currentQuote && (
        <blockquote className="mt-8 text-lg italic">
          {currentQuote}
        </blockquote>
      )}
    </div>
  );
};

export default App;

