import React, { Component } from 'react';
import List from './List';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
    }
    this.getPlanets = this.getPlanets.bind(this);
  }
    getPlanets() {
      return Axios.get("https://cors-anywhere.herokuapp.com/http://swapi.co/api/planets/").then((response) => {
        console.log(response.data.results);
        this.setState( { planets: response.data.results } )
      }
      
      )}

componentDidMount() {
  this.getPlanets()
}


  render() {
    const {planets} = this.state;
  return (

    <div className="App">
    <List planets={planets} />
    </div>
    
  );
}}

export default App;
