import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Country from './components/Country';

class App extends Component {
  state = {
    country: null,
  };

  handleChange = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar handleChange={ this.handleChange.bind(this) } />
        <Country input={ this.state } />
      </div>
    );
  }
}

export default App;
