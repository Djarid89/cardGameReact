import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render = {() => <h1>Card Game</h1>}/>
        <Route exact path="/exp" render = {() => <h1>EXP</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
