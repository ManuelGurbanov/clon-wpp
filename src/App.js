import React from 'react';
import './App.css';
import ChatList from './ChatList';
import OpenedChat from './OpenedChat';

function App() {
  return (
    <div className="app-container">
      <ChatList />
      <OpenedChat />
    </div>
  );
}

export default App;