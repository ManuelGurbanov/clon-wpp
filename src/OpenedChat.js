import React from 'react';
import './OpenedChat.css';
let name = "default";
const OpenedChat = ({ name }) => {
  return (
    <div className="openedChatTop">
      <img className='openedChatImg' src='https://hips.hearstapps.com/hmg-prod/images/carlos-alcaraz-of-spain-in-action-during-his-mens-singles-news-photo-1620118767.?crop=0.669xw:1.00xh;0.107xw,0&resize=2048:*'></img>
      <div className='openedChatTextsContainer'>
        <h1 className='openedChatText'>{name}</h1>
        <h4 className='openedChatText state'>Conectado</h4>
      </div>
    </div>
  );
};

export default OpenedChat;