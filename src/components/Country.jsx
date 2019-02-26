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
            <table key={ c.name }>
              <tbody>
                <tr className='legendaRow'>
                  <td>country</td>
                  <td>capital</td>
                  <td>region</td>
                </tr>
                <tr className='infoRow'>
                  <td>{ c.name }</td>
                  <td>{ c.capital }</td>
                  <td>{ c.region }</td>
                </tr>

                <tr className='legendaRow'>
                  <td>tld</td>
                  <td>calling code</td>
                  <td>native name</td>
                </tr>
                <tr className='infoRow'>
                  <td>{ c.topLevelDomain }</td>
                  <td>+{ c.callingCodes }</td>
                  <td>{ c.nativeName }</td>
                </tr>
              </tbody>
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
