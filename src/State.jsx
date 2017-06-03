import React, { Component } from 'react';

class State extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "Paul",
      place: "Toronto"
    };

    this.handleChange = this.handleChange.bind(this);
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


  handleSubmit(event) {
    event.preventDefault();
  }

  handleSubmit2(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Welcome To {this.props.title}!</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Change the Name in the story:
              <input type="text"
                name="value"
                value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
          <form onSubmit={this.handleSubmit2}>
            <label>
              Change the Place in the story:
                <input type="text"
                  name="value"
                  value={this.state.place} onChange={this.handleChange2.bind(this)}/>
            </label>
          </form>

          <p>{this.state.value} went to school in {this.state.place} to learn the in's and out's of Web Development! When {this.state.value} finished he/she decided there was a lot more to know about JavaScript (not JAVA!). Finally... after many weeks of hard work {this.state.value} can actually do things that are useful... </p>
      </div>
    );
  }
}

export default State;
