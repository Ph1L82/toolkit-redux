import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
    const dispatch = useDispatch();

    const { isLoading, pokemons, page } = useSelector(state => state.pokemon)

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>

            <ul>
                {
                    pokemons.map(({ name, url }) => (
                        <li key={name}><a href={url} target="_blank">{name}</a></li>
                    ))
                }
            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >Next</button>
        </>
    )
}
