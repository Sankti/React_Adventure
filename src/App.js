import React from 'react';
import './App.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      playerClass: null,
      playerHpMax: 5,
      playerHp: 5,
      playerManaMax: 5,
      playerMana: 5
    }
  };

  render() {
    return (
      <div>
        <h1>Hello.</h1>
      </div> 
    );
  };
}

export default App;
