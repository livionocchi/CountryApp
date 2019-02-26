import React, { Component } from 'react';
import * as countries from '../countries.json';

class Country extends Component {

  displayCountry = () => {

    if (this.props.input.country === null || this.props.input.country === '') {
      return <p>type a country</p>;
    } else {
      let countryName = this.props.input.country.toLowerCase()
        .split(' ')
        .map((string) => {
          if (string === 'of') {
            return string;
          } else {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        })
        .join(' ');
      return countries.default.map((c) => {
        if (c.name.includes(countryName)) {
          return (
            <table>
              <tr>
                <td>
                  <h4>country</h4>
                </td>
                <td>
                  <h4>capital</h4>
                </td>
                <td>
                  <h4>region</h4>
                </td>
              </tr>
              <tr class='infoRow'>
                <td>{ c.name }</td>
                <td>{ c.capital }</td>
                <td>{ c.region }</td>
              </tr>

              <tr>
                <td><h4>tld</h4></td>
                <td><h4>calling code</h4></td>
                <td><h4>native name</h4></td>
              </tr>
              <tr class='infoRow'>
                <td>{ c.topLevelDomain }</td>
                <td>{ c.callingCodes }</td>
                <td>{ c.nativeName }</td>
              </tr>
            </table>
          );
        };
      });
    };
  };

  render() {
    return (
      <div className="results">
        { this.displayCountry() }
      </div>
    );
  }
};

export default Country;
