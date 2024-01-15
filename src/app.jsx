import React from "react";
import { PokemonCard } from "./components/pokemon-card";
import { usePokemonData } from "./hooks/use-pokemon-data";

import "./style.css";

export function App() {
  const { isLoading, pokemonData } = usePokemonData(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>First 10 pokemon</h1>
      <ul>
        {pokemonData.map((pkmn, i) => (
          <PokemonCard pokemon={pkmn} key={`pkmn-${i}`} />
        ))}
      </ul>
    </div>
  );
}
