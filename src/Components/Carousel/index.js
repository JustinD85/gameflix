import React from 'react';
import './Carousel.css';

const Carousel = (props) => {
  return (
    <nav className="Carousel">
      left
      <h4>{props.genre.genre}</h4>
      <div className="scroll-container">
        {props.matchingGames.map(game => {
          return <div className="carousel-game">
              <span>{game.game}</span>
              <img className="carousel-image" src={require('../../img/test.jpg')}></img>
            </div>
        })}
        </div>
      right
    </nav>
  )
  }

export default Carousel;