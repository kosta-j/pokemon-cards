import './App.css';
import {useState} from "react";

function App() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState('');
    const searchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        // fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then((response) => response.json())
            // .then((data) => console.log(data))
            .then((response) => {
                setPokemon({
                    name: response.name,
                    icon: response.sprites.front_default,
                    img_large: response.sprites.other.home.front_default,
                    xp: response.stats[0].base_stat
                })
            })
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon Cards</h1>
          <div className={"Input-wrapper"}>
            <input
                type="text"
                onChange={(event) => {setPokemonName(event.target.value)}}
                placeholder="Input pokemon name"
            />
            <button onClick={searchPokemon}>GO!</button>
          </div>
      </header>
        <section className="Pokemon-cards">
            <div className="pokemon-card">
                <p>{pokemon.name}</p>
                <img className="pokemon-img" src={pokemon.img_large} alt={pokemon.name}/>
            </div>
        </section>
    </div>
  );
}

export default App;
