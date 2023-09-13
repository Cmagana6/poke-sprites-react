import { useEffect, useState } from "react"
import { getSprites } from "../helpers/getSprites"

export const useFetchPokeSprites = (pokemon)=>{

    const [pokemons,setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getSprite = async() =>{
        const newPokemons = await getSprites(pokemon)
        setPokemons(newPokemons)
        setIsLoading(false)
        console.log(pokemons)
    }

    useEffect(()=>{
        getSprite();
    },[])
        return{
            pokemons,
            isLoading
        }
}