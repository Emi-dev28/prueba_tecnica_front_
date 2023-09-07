const Pokemon = ( {search} ) => {
  console.log("entra el PokemonComponent");
  console.log(search)
  return ( console.log(search)
    // console.log(pokemon))
    // <ul className="pokemon">
    //   <li className="pokemo" key={pokemon.id}>
    //     <img src={search.sprites.front_default} alt={pokemon.forms.name} />
    //     <h3>{search.forms.name}</h3>
    //     <span>{search.id}</span>
    //   </li>
    // </ul>
  );
};
const NoPokemonResults = () => {
  return <p>No se encuentraron pokemon</p>;
};
export function Pokemones( { pokemon } ) {
  const hasPoke = pokemon?.length > 0;
  return hasPoke? <Pokemon pokemon={pokemon} /> : <NoPokemonResults />;
}
