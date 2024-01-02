import React, { useContext } from 'react';
import { ChatContext } from './ChatContext';
import './OpenedChat.css';

const OpenedChat = () => {
  const { selectedChat } = useContext(ChatContext);
  const name = selectedChat ? selectedChat.name : "default";
  const imageUrl = selectedChat ? selectedChat.imageUrl : "default_image_url";
  const lastMessage = selectedChat ? selectedChat.lastMessage : "No messages yet";

  return (
    <div>
      <section className="openedChatTop">
        <img
          className="openedChatImg"
          src={imageUrl}
          alt="Profile"
        />
        <section className="openedChatTextsContainer">
          <h1 className="openedChatText">{name}</h1>
          <h4 className="openedChatText state">Conectado</h4>
        </section>
      </section>

      <section className="wholeMessagesScreen">        
        <p className="openedChatLastMessage">{lastMessage}</p>
      </section>
    </div>
  );
};

export default OpenedChat;