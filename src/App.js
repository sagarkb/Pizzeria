import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Customize from './components/Customize/Customize';
import Checkout from './components/Checkout/Checkout';

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    tomato: false,
    mushroom: false,
    cheese: false,
    olive: false,
    pineapple: false,
  });
  useEffect(() => {
    const data = localStorage.getItem('ingredients');
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route path='/checkout' exact>
            <Checkout ingredients={ingredients} />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
