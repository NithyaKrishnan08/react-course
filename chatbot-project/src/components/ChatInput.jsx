import { useState } from 'react';
import LoadingSpinnerGif from "/src/assets/loading-spinner.gif";
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat'
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  // dayjs.extend(customParseFormat)
  // console.log(dayjs().format('h:mma'));
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }
    setIsLoading(true);
    
    setInputText('');

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];

    setChatMessages(newChatMessages);
    setChatMessages([
      ...newChatMessages,
      {
        message: <img 
          src={LoadingSpinnerGif}
          className="loading-spinner"
          />,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    setIsLoading(false);
  }

  function clearMessages() {
    setChatMessages([]);
    localStorage.setItem('messages', JSON.stringify([]));
  }

  return (
    <div
      className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
      <button
        onClick={clearMessages}
        className="clear-button"
      >Clear</button>
    </div>
  );
}