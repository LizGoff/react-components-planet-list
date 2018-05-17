import React, { Component } from 'react';
import axios from 'axios';
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar';
import PlanetList from '../PlanetList/PlanetList';
import NewStarForm from '../NewStarForm/NewStarForm';
import StarList from '../StarList/StarList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [
        { name: 'Gacrux', diameter: 117 },
        { name: 'Hadar', diameter: 13 },
        { name: 'Fomalhaut', diameter: 2 },
      ],
      newStar: {
        name: '',
        diameter: '',
      },
      planetList: []
    };
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      starList: [...this.state.starList, this.state.newStar],
      newStar: {
        name: '',
        diameter: '',
      }
    });
  }

  getFromSwapi = (nextUrl) => {

    axios({
      method: 'GET',
      url: nextUrl,
    })
      .then((response) => {
        this.setState({
          planetList: [
            ...this.state.planetList,
            ...response.data.results.map(planet => ({ name: planet.name, diameter: planet.diameter }))
          ]
        })
    
        let url = response.data.next;
        if (url != null) {
          this.getFromSwapi(url);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    let nextUrl = 'https://swapi.co/api/planets/?format=json';
    this.getFromSwapi(nextUrl);
  }


  render() {
    return (
      <div>
        <Introduction />

        <NewStar currentStar={this.state.newStar} />
        {/* {JSON.stringify(this.state)} */}

        <p>
          The first item in the array is: {this.state.starList[0].name}
        </p>

        <NewStarForm
          newStar={this.state.newStar}
          handleChangeForChild={this.handleChangeFor}
          handleSubmitForChild={this.handleSubmit} />

        <StarList starList={this.state.starList} />

        <PlanetList planetList={this.state.planetList} />


      </div>
    );
  }
}

export default App;
