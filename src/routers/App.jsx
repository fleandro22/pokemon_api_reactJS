import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import ErrorPage from '../containers/ErrorPage';
import Layout from '../components/Layout';
import AppContext from '../Context/AppContext';
import useInitialState from '../hooks/useInitialState.js';

const App = () => {

  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>

    
  );
}

export default App;