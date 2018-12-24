import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <input
          onChange={this.props.checkFilterInput}
          type="text"
          className="searchbar"
          placeholder="Search Here">
        </input>
      </nav>
    )
  }
}