import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Sidebar } from '../Components/Sidebar';
import '../Styles/Sidebar.css';  
import '../Styles/pokemonID.css';

export const PokemonId = () => {
    const { id } = useParams(); 
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isShiny, setIsShiny] = useState(false);
    const navigate = useNavigate();  

    useEffect(() => {
      const fetchPokemon = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
          if (!response.ok) {
            throw new Error('Pokemon no encontrado');
          }
          const data = await response.json();
          setPokemonData(data);
    
          const randomNum = Math.floor(Math.random() * 10) + 1;
          setIsShiny(randomNum === 1); 
        } catch (error) {
          console.error(error); 
          navigate('/error'); 
        } finally {
          setLoading(false);
        }
      };
    
      fetchPokemon();
    }, [id, navigate]); 

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Sidebar />
        <div>
          <h1>{pokemonData?.name}</h1>
          <img 
            src={isShiny ? pokemonData?.sprites.front_shiny : pokemonData?.sprites.front_default} 
            alt={pokemonData?.name} 
          />
        </div>
      </>
    );
};
