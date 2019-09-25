import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <li className="App_card">
      <img src={props.image} className="App_card_image" />
      <div className="App_card_info">
        <span className="App_card_name">{props.name}</span>
        {props.favorite ? (
          <span
            className="App_card_favorite"
            role="img"
            aria-label="star-emoji"
          >
            ⭐
          </span>
        ) : null}
      </div>
    </li>
  );
};

const types = {
  name: PropTypes.string,
  image: PropTypes.string,
  favorite: PropTypes.bool
};

Card.propTypes = types;

Card.defaultProps = {
  name: 'rick sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  favorite: false
};

export default Card;
