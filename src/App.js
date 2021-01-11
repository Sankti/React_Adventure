import React from 'react';
import './App.css'

import Header from './components/header/header.component';
import UserForm from './components/user-form/user-form.component';
import WarsawMap from './components/warsaw-map/warsaw-map.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      chosenDistricts: "brak"
    };
  };

  districtClick = (event) => {
    this.setState({chosenDistricts: event.target.id})
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="user-panel">
            <p>
              Kliknij na dzielnice, dla których chcesz zobaczyć ogłoszenia.<br />
              Wybrane dzielnice: {this.state.chosenDistricts}
            </p>
            <UserForm />
          </div>
          <WarsawMap pathClick={this.districtClick.bind(this)} />
        </div>
      </div> 
    );
  };
}

export default App;
