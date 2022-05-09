import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ApiRequest() {
    const [characters, setCharacters] = useState([]);

    const url = "https://rickandmortyapi.com/api/character";


    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setCharacters(response.data.results);
            })
    }, []);

    return (
        <>
            {characters && characters.map((character) => {
                return (
                    <div key={character.id}>
                        <h3>{character.name}</h3>
                        <p>{character.status}</p>
                        <p>{character.species}</p>
                        <img src={character.image} alt='imagen'/>
                    </div>
                    
                );
            })}
        </>
    );

}