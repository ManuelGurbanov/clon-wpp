import React from 'react';
import "./Top.css";
const svg = (
    <svg
     xmlns="http://www.w3.org/2000/svg" 
     class="icon icon-tabler icon-tabler-archive" 
     width="24" 
     height="24" 
     viewBox="0 0 24 24" 
     stroke-width="2" 
     stroke="currentColor" 
     fill="none" 
     stroke-linecap="round" 
     stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" /><path d="M10 12l4 0" />
    </svg>
)
const searchSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
)
const Top = () => {
  return (
    <div>
      <div className="profile-container">
        <img className="profileImg"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg"
          alt="profile pic">
         </img>
      </div>
      <div className="container">
        <div className="search-bar">
          <div className="search-icon">
            {searchSvg}
          </div>
          <input type="text" placeholder="Busca chat o crea uno nuevo" className="search-input" />
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