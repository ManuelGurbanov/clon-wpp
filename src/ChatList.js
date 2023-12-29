import React from 'react';
import './ChatList.css';
import Chat from './Chat';
import Top from './Top';

const ChatList = () => {
  const chats = [
    { name: 'Yo', 
    lastMessage: 'Llegué', 
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8" ,
     seen: true },
     { name: 'Papá', 
     lastMessage: 'Hola', 
     imageUrl: "https://cdn-useast1.kapwing.com/collections/video_image-VTnKjcRrV.jpeg?Expires=1703998806&GoogleAccessId=dev-sa-videoprocessing%40kapwing-dev.iam.gserviceaccount.com&Signature=n5PybUqGUhH6F85Bl0irjN8MGV%2BNuHqTiOdAO1EzBTMw%2FzhdqDEizr9pajN0n3FwAJi28aAk4Dr9Woo7rxeqUAlJBwHLO6Zws30H7eMyjJ%2FFsGyVHeEDedcbrYZHTdrWTBb0a0p0z1ThcVaZG15GbtoAS8Kb5di9t1TitmCxDfNlkV52WaqENiApY9e%2B1kv5V2SaHIHXAnpdmfctXwWRqbeuMN8M%2FHOaUpr8J9svIScBG2aRbj75MrNU9mrApezXksMXpBH8z1lzyhjy7WAIn0Ob1z9d%2Flo2X7gTxSykiwRiv58ugKW606VbI8iIowj4q5ikc%2F8IJSP6BzsTMrnsAA%3D%3D" ,
      seen: false },
      { name: 'Hermano', 
      lastMessage: 'Qué tal?', 
      imageUrl: "https://pub-static.fotor.com/assets/projects/pages/c5e1a32d955342a1af735db0b779c3a9/300w/fotor-ee6dd582036e4d16a9d9701db31d890e.jpg" ,
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