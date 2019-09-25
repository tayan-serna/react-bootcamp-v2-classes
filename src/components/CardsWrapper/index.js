import React, { Component } from 'react';
import Card from '../Card';
import Filter from '../Filter';

const mockData = [
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    favorite: false
  },
  {
    id: 2,
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    favorite: false
  },
  {
    id: 3,
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    favorite: true
  },
  {
    id: 4,
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    favorite: false
  }
];

class CardsWrapper extends Component {
  state = {
    value: '',
    characterList: mockData,
    characterListFiltered: mockData
  };

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

  render() {
    return (
      <>
        <Filter handleChange={this.handleChange} value={this.state.value} />
        <ul className="App_card-list">
          {this.state.characterListFiltered.map(chart => (
            <Card key={chart.id} {...chart} />
          ))}
        </ul>
      </>
    );
  }
}

export default CardsWrapper;
