import React, {useState} from "react";
import { AddPokeSprites } from "./AddPokeSprites";
import { PokeGrid } from "./PokeGrid";

export const PokeApp = () =>{

    const [pokemons, setPokemons] = useState(['ditto'])

    const onAddPokemon= (newPokemon) => {
        console.log('Imprimiendo array de pokemons',pokemons)
        if(pokemons.includes(newPokemon)) return;
       
        setPokemons([...pokemons,newPokemon])
        console.log('Imprimiendo array de pokemons',pokemons)
    }
    
    return (
        <>
            <h1>Poke Sprites App</h1>
            <AddPokeSprites
            onNewPokemon = {(event) =>onAddPokemon(event)}
            />
           <div className="main">
            {
                pokemons.map((pokemon)=>(
                    <PokeGrid
                    key={pokemon}
                    pokemon={pokemon}/>
                ))
            }
            </div>
        </>
    )
}