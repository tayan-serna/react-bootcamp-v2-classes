import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';

const Details = props => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    fetch(`${RickAndMortyAPI}${props.match.params.id}`)
      .then(res => res.json())
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, []);

  const handleImageClick = () => {
    setFavorite(!favorite);
  };

  if (loading) {
    return <span>Loading ...</span>;
  }

  return (
    <div className="App_detail">
      <div className="App_detail_image-container">
        <span
          role="img"
          aria-label="back"
          className="App_detail__back"
          onClick={() => props.history.goBack()}
        >
          🔙
        </span>
        <img
          onDoubleClick={handleImageClick}
          className="App_detail__image"
          src={character.image}
        />
        {favorite && (
          <span role="img" aria-label="star" className="App_detail__favorite">
            ⭐
          </span>
        )}
      </div>
      <div className="App_detail__details">
        <div className="App_detail__item">
          <strong className="App_detail__label">NAME: </strong>
          <span className="App_datail_info">
            {character.name}
            <span>({character.status})</span>
          </span>
        </div>
        <div className="App_detail__item">
          <strong className="App_detail__label">SPECIE: </strong>
          <span className="App_datail_info">Human</span>
        </div>
        <div className="App_detail__item">
          <strong className="App_detail__label">TYPE: </strong>
          <span className="App_datail_info">{character.type || 'N/A'}</span>
        </div>
        <div className="App_detail__item">
          <strong className="App_detail__label">GENDER: </strong>
          <span className="App_datail_info">{character.gender}</span>
        </div>
        <div className="App_detail__item">
          <strong className="App_detail__label">LOCATION: </strong>
          <span className="App_datail_info">{character.location.name}</span>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func
  }).isRequired
};

export default Details;
