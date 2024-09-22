import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Components/Sidebar.jsx';
import '../Styles/Sidebar.css';  
import '../Styles/pokemonFav.css';


export const PokemonFav = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPokemon = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/lucario`);
          if (!response.ok) {
            throw new Error('Pokemon no encontrado');
          }
          const data = await response.json();
          setPokemonData(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPokemon();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <>
      <Sidebar />
      <div>
        <h1>{pokemonData.name}</h1>
        <img id = "lucario" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      </div>
      </>
    );
  };

  