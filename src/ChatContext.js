import React, { createContext, useState } from 'react';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  const setChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <ChatContext.Provider value={{ selectedChat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };