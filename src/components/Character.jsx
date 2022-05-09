import React, { useState } from 'react';

export default function Character({ characterName }) {
    const [character, setCharacter] = useState({
        name: "",
        image: "",
        
    })
    const [characterSelected, setCharacterSelected] = useState(false);

    const url = "https://rickandmortyapi.com/api/character";

    const searchCharacter = () => {
        fetch(url + characterName)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setCharacter({
                name: response.name,
                image: response.image,
            })
        })
        setCharacterSelected(true);
    }

  return (
    <div>
        <button onClick={searchCharacter}>buscar personaje</button>
        {characterSelected && (
        <>
            <h2>Name: {character.name}</h2>
            <img src={character.image} alt={character.name}/>
        </>
        )}
    </div>
  )
}
