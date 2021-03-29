import React, {useState, useContext} from 'react';
import AppContext from '../Context/AppContext';
import CardSkeleton from '../components/CardSkeleton';

import Card from '../../src/components/Card';



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
