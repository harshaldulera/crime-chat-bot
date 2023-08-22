import React, { useState } from 'react';
import './App.css';
import conversationData from './conversationData.json'

function App() {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  function handleButtonClick(option) {
    setMessages([...messages, { id: Date.now(), text: option }]);
    if (currentStep + 1 < conversationData.length) {
      setCurrentStep(currentStep + 1);
    }
  }

  const currentOptions = conversationData[currentStep]?.options || [];

  return (
    <div className="mobile-container">
      <div className="chat-container">
        <div className="chat">
          {messages.map((message) => (
            <div key={message.id} className="message">
              {message.text}
            </div>
          ))}
        </div>
        <div className="buttons">
          {currentOptions.map((option, index) => (
            <button key={index} onClick={() => handleButtonClick(option)}>{option}</button>
          ))}
        </div>
        <div className="clear-button">
          <button onClick={() => setMessages([])}>Clear Chat</button>
        </div>
      </div>
    </div>
  );
}

export default App;
