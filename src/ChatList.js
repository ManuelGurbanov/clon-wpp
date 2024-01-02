import React from 'react';
import './ChatList.css';
import Chat from './Chat';
import Top from './Top';

const ChatList = () => {
  const chats = [
    { name: 'Mark Zukerberg', 
    lastMessage: 'Hello Mr. Zukerberg', 
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/65147bce590293ccd640cbf3/4x5-Mark-Zuckerberg-by-Guerin-Blask-for-Forbes/0x0.jpg?format=jpg&height=1350&width=1080" ,
    seen: false },
    { name: 'LeBron James', 
    lastMessage: 'Nice game Bro', 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg" ,
      seen: true },
    { name: 'Neymar Jr', 
    lastMessage: 'Fulbo?', 
    imageUrl: "https://static.dw.com/image/65887442_803.jpg" ,
    seen: false },
    { name: 'Carlitos Alcaraz', 
    lastMessage: 'Felicitaciones chaval', 
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/carlos-alcaraz-of-spain-in-action-during-his-mens-singles-news-photo-1620118767.?crop=0.669xw:1.00xh;0.107xw,0&resize=2048:*" ,
    seen: true },
  ];

  return (
    <div className="chat-list-container">
      <Top />
      {chats.map((chat, index) => (
        <Chat key={index} {...chat} />
      ))}
    </div>
  );
};

export default ChatList;