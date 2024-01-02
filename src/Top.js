import React from 'react';
import "./Top.css";

let greenColor = "rgb(0, 176, 103)"
const svg = (
    <svg
     xmlns="http://www.w3.org/2000/svg" 
     class="icon icon-tabler icon-tabler-archive topSvg" 
     width="24" 
     height="24" 
     viewBox="0 0 24 24" 
     stroke-width="2" 
     stroke={greenColor}
     fill="none" 
     stroke-linecap="round" 
     stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" /><path d="M10 12l4 0" />
    </svg>
)
const searchSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search topSvg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke={greenColor} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
)
const communitiesSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users topSvg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke={greenColor} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
)
const statesSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-24 topSvg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke={greenColor} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0" /><path d="M12 7v5" /><path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" /><path d="M18 15v2a1 1 0 0 0 1 1h1" /><path d="M21 15v6" /></svg>
)
const channelsSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message topSvg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke={greenColor} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>
)
const newChatSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-plus topSvg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke={greenColor} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
)
const verticalDots = (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical topSvg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke={greenColor} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
)
const Top = () => {
  return (
    <div>
      <div className="profile-container">
        <img className="profileImg"
         src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg?imwidth=680"
          alt="profile pic">
         </img>
          {communitiesSvg}
          {statesSvg}
          {channelsSvg}
          {newChatSvg}
          {verticalDots}
      </div>
      <div className="container">
        <div className="search-bar">
          <div className="search-icon">
            {searchSvg}
          </div>
          <input type="text" placeholder="Busca chat o crea uno nuevo..." className="search-input" />
        </div>
      </div>

      <div className="container">
            <span className="archive">
                {svg}
            </span>
            <p>Archivados</p>
        </div>
    </div>
  );
};

export default Top;