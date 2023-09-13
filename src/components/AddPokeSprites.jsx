import React, {useState} from "react";

export const AddPokeSprites = ({onNewPokemon})=>{

    const [inputValue,setInputValue] = useState('')

    const onInputChanged = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmitEnter = (event) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim()
        if(newInputValue.length <=1) return;
        onNewPokemon(newInputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmitEnter}>
            <input type="text"
                placeholder="Search Pokemons"
                value={inputValue}
                onChange={onInputChanged} />
        </form>
    )
}