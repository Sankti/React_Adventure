import React from 'react';
import './App.css'

import Header from './components/header/header.component';
import WarsawMap from './components/warsaw-map/warsaw-map.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      chosenDistricts: "Żaden"
    };
  };

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <p>Wybrane dzielnice: {this.state.chosenDistricts}</p>
          <WarsawMap mapcolor="rgb(219,255,150)" fill="green" />
        </div>
      </div> 
    );
  };
}

export default App;
