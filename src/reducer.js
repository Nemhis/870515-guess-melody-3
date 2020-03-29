import {extend} from './utils.js';
import {ActionType} from './actions';
import questions from './mocks/questions';

const initialState = {
  questions,
  mistakes: 0,
  maxMistakes: 3,
  step: -1,
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        newState = initialState;
      } else {
        newState = {
          step: state.step + action.payload,
        };
      }

      break;
    case ActionType.INCREMENT_MISTAKES:
      newState = {
        mistakes: state.mistakes + action.payload,
      };

      break;
  }

  if (newState !== null) {
    state = extend(state, newState);
  }

  return state;
};


export {reducer};
