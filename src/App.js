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

  // addDistrict = (district) => {
  //   this.setState(
  //     {chosenDistricts: [...this.state.chosenDistricts, district]}
  //   );
  // }

  // removeDistrict = (district) => {
  //   let index = this.state.chosenDistricts.indexOf(district)

  //   if (index > -1) {
  //     this.setState(
  //       {chosenDistricts: [this.state.chosenDistricts.splice(
  //         index, 1
  //         )]}
  //     )}
  // };

  // districtClick = (event) => {
  //   const clickedDistrict = event.target.id;
  //   console.log(clickedDistrict);
  //   console.log(typeof(clickedDistrict))

  //   if (this.state.chosenDistricts.includes(clickedDistrict)) {
  //     this.removeDistrict(clickedDistrict);
  //   } else {
  //     this.addDistrict(clickedDistrict);
  //   };
  //   // Delete this upon resolving the debug:
  //   console.log(this.state);
  // };

  districtClick = (event) => {
    let district = event.target.id;
    console.log(district);

    switch(district) {
      case "bialoleka":
        this.setState({bialoleka: !this.state.bialoleka});
        break;
      case "bielany":
        this.setState({bielany: !this.state.bielany});
        break;
      case "bemowo":
        this.setState({bemowo: !this.state.bemowo});
        break;
      case "ursus":
        this.setState({ursus: !this.state.ursus});
        break;
      case "wlochy":
        this.setState({wlochy: !this.state.wlochy});
        break;
      case "pragapn":
        this.setState({pragapn: !this.state.pragapn});
        break;
      case "srodmiescie":
        this.setState({srodmiescie: !this.state.srodmiescie});
        break;
      case "targowek":
        this.setState({targowek: !this.state.targowek});
        break;
      case "zoliborz":
        this.setState({zoliborz: !this.state.zoliborz});
        break;
      case "wola":
        this.setState({wola: !this.state.wola});
        break;
      case "ochota":
        this.setState({ochota: !this.state.ochota});
        break;
      case "rembertow":
        this.setState({rembertow: !this.state.rembertow});
        break;
      case "wesola":
        this.setState({wesola: !this.state.wesola});
        break;
      case "pragapd":
        this.setState({pragapd: !this.state.pragapd});
        break;
      case "wawer":
        this.setState({wawer: !this.state.wawer});
        break;
      case "mokotow":
        this.setState({mokotow: !this.state.mokotow});
        break;
      case "wilanow":
        this.setState({wilanow: !this.state.wilanow});
        break;
      case "ursynow":
        this.setState({ursynow: !this.state.ursynow});
        break;
      default:
        console.log("No district selected.")
    };
    console.log(this.state);
  }

  executeClick = () => {
    window.open("http://sankti.github.io/");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="user-panel">
            <p>
              Kliknij na dzielnice, dla których chcesz zobaczyć ogłoszenia.<br />
              {/* Wybrane dzielnice: {this.state.chosenDistricts.join(", ")} */}
            </p>
            <UserForm />
            <ButtonExecute pushFunction={this.executeClick.bind(this)} />
          </div>
          <WarsawMap pathClick={this.districtClick.bind(this)} state={this.state} />
        </div>
      </div>
    )
  }
};

export default App;