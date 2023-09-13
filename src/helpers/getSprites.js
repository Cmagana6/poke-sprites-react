export const getSprites = async (pokemonName) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`

    const resp = await fetch(url)

    const {sprites,name} = await resp.json()
    const pokemon ={
        pokeName:name,
        back:sprites.back_default,
        front:sprites.front_default,
        backShiny:sprites.back_shiny,
        frontShiny:sprites.front_shiny,
    }

    return pokemon;
}