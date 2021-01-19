import React from 'react';
import './App.css'

import Header from './components/header/header.component';
import UserForm from './components/user-form/user-form.component';
import WarsawMap from './components/warsaw-map/warsaw-map.component';
import ButtonExecute from './components/button-execute/button-execute.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      chosenDistricts: [],
      bialoleka: false,
      bielany: false,
      bemowo: false,
      ursus: false,
      wlochy: false,
      pragapn: false,
      srodmiescie: false,
      targowek: false,
      zoliborz: false,
      wola: false,
      ochota: false,
      rembertow: false,
      wesola: false,
      pragapd: false,
      wawer: false,
      mokotow: false,
      wilanow: false,
      ursynow: false,
      vistula: false
    };
  };

  addDistrict = (event) => {
    const district = event.target.id;
    console.log(district);

    this.setState(
      {district: !this.state.district}
    );
    // Delete this upon resolving the debug:
    console.log(this.state);
  };

  executeClick = () => {
    window.open("http://sankti.github.io/");
  };

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="user-panel">
            <p>
              Kliknij na dzielnice, dla których chcesz zobaczyć ogłoszenia.<br />
              Wybrane dzielnice: {this.state.chosenDistricts.join(", ")}
            </p>
            <UserForm />
            <ButtonExecute pushFunction={this.executeClick.bind(this)} />
          </div>
          <WarsawMap pathClick={this.addDistrict.bind(this)} />
        </div>
      </div> 
    );
  };
}

export default App;
