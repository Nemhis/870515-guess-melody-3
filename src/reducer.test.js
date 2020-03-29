import {reducer} from './reducer.js';
import {ActionType} from './actions';

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
      picture: `https://api.adorable.io/avatars/128/A`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/AB`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/ABC`,
      artist: `Jim Beam`,
    }],
  }
];

describe(`Reducer tests`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      questions,
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      questions,
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    })).toEqual({
      questions,
      step: 0,
      mistakes: 0,
      maxMistakes: 3,
    });

    expect(reducer({
      questions,
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 0,
    })).toEqual({
      questions,
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      questions,
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    })).toEqual({
      questions,
      step: -1,
      mistakes: 1,
      maxMistakes: 3,
    });

    expect(reducer({
      questions,
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    })).toEqual({
      questions,
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
    });
  });
});

