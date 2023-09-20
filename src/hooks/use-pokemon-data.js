import React, { useState, useEffect } from 'react';
import pkm from './pkm-mock.json';

export function usePokemonData(mock = true) {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFirst10Pokemon() {
      const fetchRequests = [];

      for (let i = 1; i <= 10; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        fetchRequests.push(fetch(url).then((response) => response.json()));
      }

      try {
        const pokemonData = await Promise.all(fetchRequests);
        console.log(pokemonData);
        setPokemonData(pokemonData);
        setIsLoading(false);
      } catch (error) {
        setPokemonData([]);
        setIsLoading(false);
        console.error(error);
      }
    }

    if (mock) {
      const mockedResponse = Array.from({ length: 10 }, () => pkm);
      setPokemonData(mockedResponse);
      setIsLoading(false);
    } else {
      fetchFirst10Pokemon();
    }

    return () => {
      setIsLoading(false);
    };
  }, []);

  return {
    pokemonData,
    isLoading,
  };
}
