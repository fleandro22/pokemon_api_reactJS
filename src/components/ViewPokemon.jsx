import React, {useState, useContext, useEffect, useRef} from 'react';
import AppContext from '../Context/AppContext';

const ViewPokemon = () => {
  const {pokeDetail} = useContext(AppContext);
  const {poke, setPoke} = useContext(AppContext);
  const [keyword, setKeyword] = useState("");
  const{storagePoke} = useContext(AppContext);

  const handleSubmit = (e)=>{
    e.preventDefault(); 
  }

  const handleChange = (e)=>{
    if(e.target.value.length < 1){
      setPoke(storagePoke);
    }
    
    setKeyword(e.target.value);
  }

  useEffect(() => {
    const results = poke.filter(person =>
      person.name.toLowerCase().includes(keyword.toLocaleLowerCase())
    );
    setPoke(results);
  }, [keyword]);

  return (
  
     <div className="viewPokemon">
      <article className="viewPokemon_search">
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <input type="text" className="form-control" placeholder="Search to Pokemon..." onChange={(e)=>{handleChange(e)}} value={keyword}/>    
        </form>
      </article>
      <article className="viewPokemon__image">
        {
          pokeDetail.name?.length > 0 &&
            <picture>
              <img src ={pokeDetail.sprites.front_default} alt={pokeDetail.name}/>
            </picture>
            
        }
      </article>
      <article className="viewPokemon__details">
        {
          pokeDetail.name?.length > 0 &&
          <div>
            <h2>Id: <span>{pokeDetail.id}</span></h2>
            <h2>Name: <span>{pokeDetail.name}</span></h2>
            <h2>Type: <span>{pokeDetail.types[0].type.name}</span></h2>
            <h2>Abilty:<span>{pokeDetail.abilities[0].ability.name}</span></h2>
          </div>
        }
      </article>
    </div>
  
  )
}

export default ViewPokemon
