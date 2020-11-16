import React from 'react'
import "./PokemonCard.css";

function PokemonCard({pokemon}) {
    return (
        <div className="card">
        {pokemon.map(p=>(
<div className="card__container" key={p}><div className="card__content">{p}</div></div>

         ) )}
            
        </div>
    )
}

export default PokemonCard
