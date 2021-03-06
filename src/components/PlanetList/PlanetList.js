import React, { Component } from 'react';

class PlanetList extends Component {

  render() {
    return (
      <div>
        <ul>
            {/* the key in mostall of our databases will be id */}
          {this.props.planetList.map(planet => <li key={planet.name}>
            The planet {planet.name} is {planet.diameter} million km in diameter
          </li>)}
        </ul>
      </div>
    );
  }
}

export default PlanetList;
