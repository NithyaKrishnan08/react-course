import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function useAutoScroll(dependencies) {
  /* useRef automatically save an HTML element from the component */
  const containerRef = useRef(null);

  /* React will run this useEffect everytime this component is created & everytime this component is updated */
  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);

  return containerRef;
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div
      className="chat-messages-container"
      ref={chatMessagesRef}>
    {chatMessages.map((chatMessage) => (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
        time={chatMessage.time}
      />
    ))}
    </div>
  );
}

export default ChatMessages;