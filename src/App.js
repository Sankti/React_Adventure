import React from 'react';
import './App.css'

import Header from './components/header/header.component';
import WarsawMap from './components/warsaw-map/warsaw-map.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      playerClass: null,
      playerHpMax: 5,
      playerHp: 5,
      playerManaMax: 5,
      playerMana: 5
    };
  };

  render() {
    return (
      <div>
        <Header />
        <WarsawMap mapcolor="rgb(219,255,150)" fill="green" />
      </div> 
    );
  };
}

export default App;
