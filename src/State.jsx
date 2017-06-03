import React, { Component } from 'react';

class State extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "Paul",
      place: "Toronto"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleChange2(event) {
    this.setState({
      place: event.target.place
    });
  }

  handleSubmit(event, event2) {
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1>Welcome To {this.props.title}!</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Change the Name in the story:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Change the Name in the story:
              <input type="text" value={this.state.place} onChange={this.handleChange2} />
            </label>
          </form>
          <p>{this.state.value} went to school in {this.state.place} to learn the in's and out's of Web Development! When {this.state.value} finished he/she decided there was a lot more to know about JavaScript (not JAVA!). Finally... after many weeks of hard work {this.state.value} can actually do things that are usefull... like this {this.state.value}</p>
      </div>
    );
  }
}

export default State;
