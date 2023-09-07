import { useCallback, useRef, useState } from "react"
import { searchPokemon } from "../Services/pokemon.jsx"

export function usePokemon({search}) {
    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState(false)
    console.log("Entra el usePokemon")
    const previousPokemon = useRef(search)
    const getPokemon = useCallback(async (search) => {
         if(search === previousPokemon.current) return
    // Aca esta mi error. 
    console.log(search);

    try{
        setLoading(true)
        previousPokemon.current = search
        const newPokemon = await searchPokemon(search)
        console.log("1")
        console.log(pokemon)
        console.log("2")
        console.log(newPokemon)
        setPokemon(newPokemon)
    }catch(e){
        throw new Error("no se encuentra pokemon, el estado actual del 'search' es", {search})

    }finally{
        setLoading(false)
    }
},[]);
return {pokemon, getPokemon, loading}
  }