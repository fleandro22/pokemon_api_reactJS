import React,{useState, useContext} from 'react';
import AppContext from '../Context/AppContext';

const Card = ({props}) => {
  const {pokeDetail, setPokeDetail} = useContext(AppContext);
  let activo = 'pokemon__image hvr-fade';

  //Event click to selected pokemon details
  const handleViewDetail = (item) => {
    setPokeDetail(item);
  };

  return (
    <>
    {
      pokeDetail.id === props.id ? 
        <div onClick={()=> (handleViewDetail(props))} className="mainApp__item" key={props.id}>
          <img className='pokemon__image hvr-fade hvr-fade_active'  src={props.sprites.front_default} alt={props.name} />
          <span className="pokemon__name">{props.name}</span>
        </div> 
      :
        <div onClick={()=> (handleViewDetail(props))} className="mainApp__item" key={props.id}>
          <img className="pokemon__image hvr-fade"  src={props.sprites.front_default} alt={props.name} />
          <span className="pokemon__name">{props.name}</span>
        </div> 
    }
    </>
  )
}

export default Card
