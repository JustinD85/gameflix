import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../Components/Carousel';

describe('Carousel', () => {
  let wrapper;
  const createPopUpMock = jest.fn();
  const genre = 'Strategy';
  const matchingGames = [{
    "game": "Don't Be A Loser",
    "description": "Don't Be a Loser is a fun party game where you don't have to win but you just don't want to be the BIG LOSER! This game is easy to play and designed with social situations in mind, allowing players to freely leave and come back without interrupting the game!",
    "min_age": 13,
    "min_players": 4,
    "max_players": 10,
    "number_of_minutes": "30",
    "genre_ID": [6, 11, 13],
    "expansion_pack": false,
    "challenge_level": "average",
    "publisher": "All Over The Board",
    "youtube": "ZYvvhOzYx_4",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/DBAL-main-photo-box_350x.jpg?v=1512623523"
  }];
  const event = {
    target: {
      classList: {
        contains() { return ['fa-angle-right'] }
      },
      parentElement: {
        childNodes: ['', { srollLeft: 250 }]
      }
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Carousel genre={genre}
      matchingGames={matchingGames} createPopUp={createPopUpMock}
      popUpInfo={false} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should increase the scroll of the scroll container', () => {
  //   wrapper.find('.fa-angle-right').simulate('click', event )
  // })
})