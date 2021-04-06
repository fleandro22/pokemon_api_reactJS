import React from 'react';
import MainApp from '../components/MainApp';
import ViewPokemon from '../components/ViewPokemon';
import '../styles/index.scss';

const Home = () => {
  return (
    <section>
      <div className="container">
        <MainApp />
        <ViewPokemon />
      
      </div>
    </section>	

  );
}

export default Home;