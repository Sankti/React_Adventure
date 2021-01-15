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
      chosenDistricts: []
    };
  };

  addDistrict = (event) => {
    this.state.chosenDistricts.push(event.target.id);
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
              Wybrane dzielnice: {this.state.chosenDistricts.join(",")}
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
