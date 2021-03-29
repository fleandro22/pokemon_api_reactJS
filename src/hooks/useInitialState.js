import { useState , useEffect} from 'react';
import { getPokemon, getAllPokemon } from '../services/pokemon';

const URL_API = 'https://pokeapi.co/api/v2/pokemon/?limit=12';

const useInitialState = () => {
  const [poke, setPoke] = useState([]);
  const [pokeDetail, setPokeDetail] = useState([]);
  const [storagePoke, setStoragePoke] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(URL_API)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPoke(_pokemonData);
    setStoragePoke(_pokemonData);
    setPokeDetail(_pokemonData[0])
  }


  return{
    poke,
    setPoke,
    pokeDetail,
    setPokeDetail,
    storagePoke,
    loading
  }
}

export default useInitialState



