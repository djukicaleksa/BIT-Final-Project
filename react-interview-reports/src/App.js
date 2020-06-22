import React from 'react';
import './App.css';
import { Home } from './components/HomePage/Home';
import { InfoPage } from './components/InfoPage/InfoPage';
import 'materialize-css'
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from './components/Admin/LoginPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info/:id' component={InfoPage} />
        <Route exact path='/admin' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
