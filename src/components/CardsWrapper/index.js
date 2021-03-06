import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card';
import Filter from '../Filter';

import FavoriteContext from '../../context/favoriteContext';

const RickAndMortyUrl = 'https://rickandmortyapi.com/api/character';

class CardsWrapper extends Component {
  state = {
    value: '',
    characterList: [],
    characterListFiltered: [],
    loading: true
  };

  // static contextType = FavoriteContext;

  handleChange = e => {
    const value = e.target.value;
    const characterListFiltered = this.state.characterList.filter(chart =>
      chart.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState(() => ({
      value,
      characterListFiltered: characterListFiltered
    }));
  };

  componentDidMount() {
    fetch(RickAndMortyUrl)
      .then(res => res.json())
      .then(({ results }) => {
        this.setState({
          characterList: results,
          characterListFiltered: results,
          loading: false
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <Filter handleChange={this.handleChange} value={this.state.value} />
        <ul className="App_card-list">
          {this.state.characterListFiltered.map(chart => (
            <Link to={`/details/${chart.id}`} key={chart.id}>
              <Card {...chart} favorite={this.props.favoriteCharts[chart.id]} />
            </Link>
          ))}
        </ul>
      </>
    );
  }
}

export default function CardsWrapperContext() {
  return (
    <FavoriteContext.Consumer>
      {([favoriteCharts, setFavoriteCharts]) => (
        <CardsWrapper
          favoriteCharts={favoriteCharts}
          setFavoriteCharts={setFavoriteCharts}
        />
      )}
    </FavoriteContext.Consumer>
  );
}
