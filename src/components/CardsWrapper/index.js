import React from 'react';
import Card from '../Card';

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

const CardsWrapper = () => (
  <>
    {' '}
    <div className="App_label-group App_filter">
      <label htmlFor="filter">Filter:</label>
      <input id="filter" />
    </div>
    <ul className="App_card-list">
      {mockData.map(chart => (
        <Card key={chart.id} {...chart} />
      ))}
    </ul>
  </>
);

export default CardsWrapper;
