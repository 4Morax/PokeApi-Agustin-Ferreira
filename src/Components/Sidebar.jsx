import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';  

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPikaVisible, setIsPikaVisible] = useState(true); 

  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
    setIsPikaVisible(false); 
  };
  
  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
    setIsPikaVisible(true); 
  };
  
  return (
    <nav className="App-sidebar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pokemonFav">Pokemon Favorito</Link></li>
        <li><Link to="/pokedex/1">Pokedex</Link></li>
      </ul>
      {isSidebarOpen && (
        <img id="pikaRun" src="https://i.pinimg.com/originals/a7/a8/d0/a7a8d06c754cfbbbc37e64cb118c513c.gif" alt="Pika Run" />
      )}
      {isPikaVisible && ( 
        <img id="pika" src="https://i.pinimg.com/originals/16/d3/2e/16d32e6bbc6ddb8bb084fcc767a22acf.gif" alt="Pika" />
      )}
    </nav>
  );
};
