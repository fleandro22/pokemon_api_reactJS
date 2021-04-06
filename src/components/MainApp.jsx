import React, { useContext} from 'react';
import AppContext from '../Context/AppContext';
import CardSkeleton from '../components/Card/CardSkeleton.js';
import Card from '../../src/components/Card/Card.jsx';

const MainApp = () => {
  const {poke, loading} = useContext(AppContext);
    
  if(loading) return <CardSkeleton />
  return (
    
    <div className="mainApp">
      {
        poke.map( (item) =>(
          <Card props={item} /> 
        ))
      }
    </div>
    
  )
}

export default MainApp
