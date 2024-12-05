import React from 'react';
import '../css/card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt="card" />
      </div>
      <div className="card-content">
        <h1>{props.title}</h1>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
        <div className="card-button">
          <button>{props.button}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;