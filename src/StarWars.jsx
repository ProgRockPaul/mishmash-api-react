import React, { Component } from 'react';

class StarWars extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      climate: '',
      population: '',
    }
  }

  componentDidMount() {
    // save a reference to `this` because the value of `this` will change
    // inside the different callback functions.
    var base = this;

    // fetch a poem
    let api = ['http://swapi.co/api/planets/1/?format=json', 'http://swapi.co/api/planets/2/?format=json'];
    fetch(api[0])
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({
            name: json.name,
            climate: json.climate,
            population: json.population
          });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      });
  }

  render() {
    let name = this.state.name;
    let climate = this.state.climate;
    let population = this.state.population;

    return (
      <div>
        <h1>Here I'm pulling JSON data from <a href="https://swapi.co/ " >swapi.co</a>  
        </h1>
        <p>Planet Name: {name}</p>
        <p>Climate: {climate}</p>
        <p>Approx Population: {population}</p>
      </div>
    );
  }
}

export default StarWars;
