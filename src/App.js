import React from 'react';
import './App.css';
import ChatList from './ChatList';
import OpenedChat from './OpenedChat';
import { ChatProvider } from './ChatContext'; 

function App() {
  return (
    <div className="app-container">
      <ChatProvider>
        <ChatList />
        <OpenedChat />
      </ChatProvider>
    </div>
  );
}

export default App;
