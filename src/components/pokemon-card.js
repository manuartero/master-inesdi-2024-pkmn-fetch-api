import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const ASSETS = {
  fire: {
    icon: 'fa-fire',
    bgColor: '#FF5722', // Red-Orange
  },
  water: {
    icon: 'fa-tint',
    bgColor: '#2196F3', // Blue
  },
  grass: {
    icon: 'fa-leaf',
    bgColor: '#4CAF50', // Green
  },
  electric: {
    icon: 'fa-bolt',
    bgColor: '#FFC107', // Yellow
  },
  psychic: {
    icon: 'fa-brain',
    bgColor: '#FF4081', // Pink
  },
  normal: {
    icon: 'fa-circle',
    bgColor: '#9E9E9E', // Gray
  },
  fighting: {
    icon: 'fa-fist-raised',
    bgColor: '#FF9800', // Orange
  },
  flying: {
    icon: 'fa-dove',
    bgColor: '#03A9F4', // Light Blue
  },
  poison: {
    icon: 'fa-skull-crossbones',
    bgColor: '#673AB7', // Purple
  },
  ground: {
    icon: 'fa-mountain',
    bgColor: '#795548', // Brown
  },
  rock: {
    icon: 'fa-gem',
    bgColor: '#607D8B', // Blue Gray
  },
  bug: {
    icon: 'fa-bug',
    bgColor: '#8BC34A', // Light Green
  },
  ghost: {
    icon: 'fa-ghost',
    bgColor: '#9C27B0', // Deep Purple
  },
  steel: {
    icon: 'fa-shield-alt',
    bgColor: '#FFD700', // Gold
  },
  dragon: {
    icon: 'fa-dragon',
    bgColor: '#7E57C2', // Deep Purple
  },
  ice: {
    icon: 'fa-snowflake',
    bgColor: '#03DAC6', // Teal
  },
  dark: {
    icon: 'fa-moon',
    bgColor: '#424242', // Dark Gray
  },
  fairy: {
    icon: 'fa-hat-wizard',
    bgColor: '#E91E63', // Pink
  },
};

export function PokemonCard({ pokemon }) {
  const image = pokemon.sprites.front_default;
  const type = pokemon.types[0].type.name;
  const bgColor = ASSETS[type].bgColor || '#00FF00';
  return (
    <article
      className={`pokemon-card border-2 border-green-800 rounded-lg p-4 flex flex-col items-center justify-between max-w-xs max-h-96`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="pokemon-type mb-2">
        <span className={`fa ${ASSETS[type]} w-8 h-8`}></span>
      </div>
      <div className="pokemon-image">
        <img
          src={image}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto mb-2"
        />
      </div>
      <div className="pokemon-details text-center">
        <h2 className="text-xl font-semibold mb-2">{pokemon.name}</h2>
      </div>
    </article>
  );
}
