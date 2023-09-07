import "./App.css";
import { usePokemon } from "./Hooks/usePokemon";
import { Pokemones} from "./Components/Pokemon";
import { useEffect, useState, useRef } from "react";
import "./index.css";

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return
    }
    if (search === "") {
      setError("No se puede buscar un pokemon vacio!");
      return;
    }
    if (search.length < 3) {
      setError("El pokemon debe tener al menos 3 caracteres");
      return;
    }
    if (!search.match(/[A-Za-z0-9]+/g)) {
      setError("El pokemon solo puede contener letras y numeros");
      return;
    }
    if (search.startsWith(" ")) return;

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
function App() {
  const { search, setSearch, error } = useSearch();
  const { pokemon, getPokemon, loading } = usePokemon( {search} );

  const handlerSubmit = (event) => {
    event.preventDefault();
    getPokemon( search );

  };

  const handlerChange = (element) => {
    const newSearch = element.target.value;
    setSearch(newSearch);
  };
  console.log(pokemon);
  return (
    <div>
      <header>
        <form className="form" onSubmit={handlerSubmit}>
          <h1>Listado de pokemon</h1>
          <div className="search-box">
            <input
              style={{
                border: "1px solid transparent",
                borderColor: error ? "red" : "transparent",
              }}
              name="pokemon"
              type="search"
              value={search}
              onChange={handlerChange}
              placeholder="charmander, clefairy..."
            />
            <button type="submit">Buscar</button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error} </p>}
      </header>
      <main>
        {loading ? <p>Cargando</p> : <Pokemones pokemon={pokemon} />}
      </main>
    </div>
  );
}
export default App;
