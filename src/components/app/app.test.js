import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/1`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/2`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/3`,
      artist: `Jim Beam`,
    }],
  },
];

describe(`Render correctly <App>`, () => {
  it(`Render welcome screen`, () => {
    const tree = renderer
      .create(<App
        questions={questions}
        errorsCount={3}
        step={-1}
        onWelcomeButtonClick={() => {}}
        onUserAnswer={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render genre screen`, () => {
    const tree = renderer
      .create(<App
        questions={questions}
        errorsCount={3}
        step={0}
        onWelcomeButtonClick={() => {}}
        onUserAnswer={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render artist screen`, () => {
    const tree = renderer
      .create(<App
        questions={questions}
        errorsCount={3}
        step={1}
        onWelcomeButtonClick={() => {}}
        onUserAnswer={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
