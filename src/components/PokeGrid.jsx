import React from "react";
import { useFetchPokeSprites } from "../hooks/useFetchPokeSprites";
import { PokeGridItem } from "./PokeGridItem";

export const PokeGrid = ({pokemon})=>{

    const {pokemons,isLoading} = useFetchPokeSprites(pokemon)
    console.log(pokemons,isLoading)
    return(
        <>
        {
            isLoading && ( <h2>Loading...</h2> )
        }
        <div className="container">
                <PokeGridItem back={pokemons.back} 
                front={pokemons.front}
                backShiny={pokemons.backShiny}
                frontShiny={pokemons.frontShiny}
                pokeName={pokemons.pokeName}/>
        </div> 
        </>
    )
}