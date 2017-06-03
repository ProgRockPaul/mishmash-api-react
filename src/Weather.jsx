import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
  super(props);
  this.state = {
    city: ''
    }
  }

  componentDidMount() {
    // save a reference to `this` because the value of `this` will change
    // inside the different callback functions.
    var base = this;

    // fetch a poem
    let api = 'api.openweathermap.org/data/2.5/weather?q=Toronto';
    fetch(api)
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({
            city: json.main
          });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      });
  }
  render () {
    let city = this.state.city;
    return (
      <div>
        <p>Toronto Weather: {city} </p>
      </div>
    )
  }
}

export default Weather;
