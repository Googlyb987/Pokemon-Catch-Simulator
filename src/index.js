import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

function App() {
    const [pokedex, setPokedex] = useState([])
    const [wildPokemon, setWildPokemon] = useState({});

    useEffect(() => {
        encounterWildPokemon()
    }, [])

    const pokeId = () =>  {
        const min = Math.ceil(1)
        const max = Math.floor(151)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const encounterWildPokemon = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
        .then(response => {
            setWildPokemon(response.data);
        })
    }

    return (
        <div className="app-wrapper">
            <header>
                <h1 className="title">React Hooks</h1>
                <h3 className="subtitle">With Pokemon</h3>
            </header>

            <section className="wild-pokemon">
               <h2>Wild Encounter</h2>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
                + wildPokemon.id + ".png"} className="sprite" />
                <h3>{wildPokemon.name}</h3>
                <button className="catch-btn">CATCH</button>
            </section>

            <section className="pokedex">
                <h2>Pokédex</h2>
                <div className="pokedex-list">
                    {pokedex.map(pokemon => (
                      <div className="pokemon" key={pokemon.id}> 
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
                        + pokemon.id + ".png"} className="sprite" />
                        <h3 className="pokemon-name">{pokemon.name}</h3>
                        <button className="remove">&times;</button>
                      </div>  
                    ))}
                </div>
            </section>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

