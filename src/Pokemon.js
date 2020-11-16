import React,{useState,useEffect} from 'react'
import axios from "axios";
import PokemonCard from './PokemonCard';

function Pokemon() {
    const [pokemon,setPokemon]=useState([]);
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon").then(res=>{
            // console.log(res);
            setPokemon(res.data.results.map(p=>p.name))
        })

    },[])
    return (
        <div>
          <PokemonCard  pokemon={pokemon}/>  
        </div>
    )
}

export default Pokemon



