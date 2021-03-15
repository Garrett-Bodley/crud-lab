import React, { Component } from 'react';

class RestaurantInput extends Component {

  state={
    text: ''
  }

  handleOnChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Name:</label>
          <input type="text" value={this.state.name} onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
        <p>{this.state.name}</p>
      </div>
    );
  }
};

export default RestaurantInput;
