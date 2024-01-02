import './Chat.css';
import React, { useContext } from 'react';
import { ChatContext } from './ChatContext';

const checkmarkSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-checks"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 12l5 5l10 -10" />
      <path d="M2 12l5 5m5 -5l5 -5" />
    </svg>
  );
  
  const Chat = ({ name, lastMessage, imageUrl, seen }) => {
    const { setChat } = useContext(ChatContext);
  
    const handleChatClick = () => {
      console.log(`Chat clicked: ${name}`);
      
      // Update the global state when a chat is clicked
      setChat({ name, lastMessage, imageUrl, seen });
  
      // Debug: Check the updated state
      console.log('Updated chat state:', { name, lastMessage, imageUrl, seen });
    };
  
    return (
      <div className="chatContainer">
        <button className="chatButton" onClick={handleChatClick}>
          <img className="chatImg" src={imageUrl} alt="Profile" />
          <div className="chatInfo">
            <h4 className="chatName">{name}</h4>
            <div className="messageContainer">
              <p className="chatLastMessage">
                {lastMessage}
                <span className={`checkmark ${seen ? 'seen' : ''}`}>
                {checkmarkSVG}
              </span>
              </p>
            </div>
          </div>
        </button>
      </div>
    );
  };
export default Chat;
