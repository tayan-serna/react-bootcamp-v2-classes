import React from 'react';

const Details = () => (
  <div className="App_detail">
    <div className="App_detail_image-container">
      <span role="img" aria-label="back" className="App_detail__back">
        🔙
      </span>
      <img
        className="App_detail__image"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      />
      <span role="img" aria-label="star" className="App_detail__favorite">
        ⭐
      </span>
    </div>
    <div className="App_detail__details">
      <div className="App_detail__item">
        <strong className="App_detail__label">NAME: </strong>
        <span className="App_datail_info">
          Rick Sanchez <span>(Alive)</span>
        </span>
      </div>
      <div className="App_detail__item">
        <strong className="App_detail__label">SPECIE: </strong>
        <span className="App_datail_info">Human</span>
      </div>
      <div className="App_detail__item">
        <strong className="App_detail__label">TYPE: </strong>
        <span className="App_datail_info">'N/A'</span>
      </div>
      <div className="App_detail__item">
        <strong className="App_detail__label">GENDER: </strong>
        <span className="App_datail_info">Male</span>
      </div>
      <div className="App_detail__item">
        <strong className="App_detail__label">LOCATION: </strong>
        <span className="App_datail_info">Earth</span>
      </div>
    </div>
  </div>
);

export default Details;
