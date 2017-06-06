import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import State from './State';
import StarWars from './StarWars';
import Weather from './Weather';
import FnProg from './FnProg';

var person = {
  title: "Paul's Home Page",
  name: "Paul Walsh"
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='flex-container'>
            <nav className="navbar">
              <Link to="/">Home Page</Link> {' '}
              <Link to="/state">State Example</Link> {' '}
              <Link to="/starwars">Star Wars Planets</Link> {' '}
              <Link to="/weather">Toronto Weather</Link> {' '}
              <Link to="/fnprog">Functional Programming Example</Link> {' '}
            </nav>
          </div>
          <Route exact path="/" component={
              () => (<Home
                title={person.title}
                name= {person.name} />
          )}/>
          <Route path="/state" component={
              () => (<State
                title={person.title}
                name= {person.name} />
          )}/>
          <Route path="/starwars" component={StarWars} />
          <Route path="/weather" component={Weather} />
          <Route path="/fnprog" component={FnProg} />
        </div>
      </Router>
    );
  }
}

export default App;
