import React from "react";
import logospotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
  <div className="header">
    <img src={logospotify} alt="Logo Spotify"/> {/* coloco entre chaves pq é jsx. se fosse html , nao teria esse problema */}
      
    <a className="header__link" href="/">
        <h1>Spotify</h1>
    </a>
  </div>
    
  );
  
};

export default Header;

