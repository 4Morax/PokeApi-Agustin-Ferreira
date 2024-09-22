import React from 'react';
import './App.css';
import { Sidebar } from './Components/Sidebar.jsx';
import './Styles/Sidebar.css';  
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="App">
        <header className="App-header">
          <h1>¿Quieres saber cual es mi <Link to={`/pokemonfav`}>Pokemon favorito</Link>?</h1>
        </header>
      </div>
    </>
  );
};

export default App;
