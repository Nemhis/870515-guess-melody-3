import React from 'react';
import renderer from 'react-test-renderer';

import GameScreen from './game-screen.jsx';
import {GameType} from '../../const';

const children = <span>this is children</span>;

describe(`Render correctly <GameScreen/>`, () => {
  it(`GameType.ARTIST <GameScreen/> render correctly`, () => {
    const tree = renderer
      .create(<GameScreen type={GameType.ARTIST}> {children} </GameScreen>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`GameType.GENRE <GameScreen/> render correctly`, () => {
    const tree = renderer
      .create(<GameScreen type={GameType.GENRE}> {children} </GameScreen>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
