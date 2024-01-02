import React, { createContext, useState } from 'react';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState({
    name: 'Mark Zuckerberg',
    lastMessage: 'Hello, how can I help you?',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/65147bce590293ccd640cbf3/4x5-Mark-Zuckerberg-by-Guerin-Blask-for-Forbes/0x0.jpg?format=jpg&height=1350&width=1080', // Replace with the actual image URL
    seen: false,
  });

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