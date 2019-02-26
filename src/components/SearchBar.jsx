import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <form className="search-bar">
        <label>
          <h1>search a country</h1>
        </label>
        <input id="country" type="text" autoComplete="off" onChange={ this.props.handleChange } />
      </form>
    );
  }
};

export default SearchBar;
