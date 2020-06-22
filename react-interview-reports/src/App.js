import React from 'react';
import './App.css';
import { Home } from './components/HomePage/Home';
import {InfoPage} from './components/InfoPage/InfoPage';
import 'materialize-css'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info/:id' component={InfoPage} />
      </Switch>
    </div>
  );
}

export default App;
