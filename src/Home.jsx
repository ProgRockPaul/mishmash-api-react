import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To {this.props.title}!</h1>
        <p>My name is {this.props.name}, click on the nav bar above to see some of my work! </p>
      </div>
    );
  }
}

export default Home;
