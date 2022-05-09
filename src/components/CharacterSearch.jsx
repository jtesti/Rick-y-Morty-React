import React, { useState } from 'react';
import Character from './Character';

export default function CharacterSearch() {
    const [characterName, setCharacterName] = useState("");

    const handleChange = (e) => {
      setCharacterName(e.target.value)
    }

  return (
    <div>
        <h1>Busca tu personaje</h1>
        <input type="text" value={characterName} onChange={handleChange}/>

        <Character characterName={characterName}/>
    </div>
  )
}
