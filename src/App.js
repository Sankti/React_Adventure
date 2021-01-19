import React from 'react';
import './App.css'

import Header from './components/header/header.component';
import DisplayArray from './components/display-array/display-array.component';
import UserForm from './components/user-form/user-form.component';
import WarsawMap from './components/warsaw-map/warsaw-map.component';
import ButtonExecute from './components/button-execute/button-execute.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      chosenDistricts: [],
      bialoleka: false
    };
  };

  addDistrict = (event) => {
    this.setState(function() {
      return {chosenDistricts: event.target.id}
    });
    // Delete this upon resolving the debug:
    console.log(this.state.chosenDistricts.join(", "));
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
              Wybrane dzielnice: <DisplayArray array={this.state.chosenDistricts} />
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
