import React, { Component } from 'react';
import './App.css';
import Team from './Team';

export default class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        someData: [
          {
            name: "Frank",
            location: "Huntington Beach",
          },
          {
            name: "Serge",
            location: "Seattle",
          },
          {
            name: "Joshua",
            location: "Tacoma",
          }
        ],
        isShowing: false,
     }
   }
  
  toggleShowing=() => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  render() {
    let team;

    if (this.state.isShowing) {
      team = <Team someData={this.state.someData} />
    } else {
      team = <p></p>
    }

    return (
      <div>
        {team}
        <button onClick={this.toggleShowing}>
          Switch
        </button>
      </div>
    )
  }
}


