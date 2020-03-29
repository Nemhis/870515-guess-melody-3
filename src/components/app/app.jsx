import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';

import withActivePlayer from '../../hocs/with-audio-player';
import {GameType} from '../../const';
import {ActionCreator} from '../../actions';

const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);

class App extends PureComponent {
  _renderGameScreen() {
    const {
      questions,
      step,
      errorsCount,
      onWelcomeButtonClick,
    } = this.props;

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen onWelcomeButtonClick={onWelcomeButtonClick} errorsCount={errorsCount} />
      );
    }

    const question = questions[step];

    if (!question) {
      return null;
    }

    return this._getScreenByQuestion(question);
  }

  _getScreenByQuestion(question) {
    let screen = null;
    const {onUserAnswer} = this.props;

    switch (question.type) {
      case GameType.GENRE:
        screen = <GameScreen type={question.type}>
          <GenreQuestionScreenWrapped question={question} onAnswer={onUserAnswer}/>
        </GameScreen>;
        break;
      case GameType.ARTIST:
        screen = <GameScreen type={question.type}>
          <ArtistQuestionScreenWrapped question={question} onAnswer={onUserAnswer}/>
        </GameScreen>;
        break;
    }

    return screen;
  }

  render() {
    const {onUserAnswer} = this.props;
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-genre">
            <GameScreen type={questions[0].type}>
              <GenreQuestionScreenWrapped question={questions[0]} onAnswer={onUserAnswer}/>
            </GameScreen>
          </Route>
          <Route exact path="/dev-artist">
            <GameScreen type={questions[1].type}>
              <ArtistQuestionScreenWrapped question={questions[1]} onAnswer={onUserAnswer}/>
            </GameScreen>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
  })),
  errorsCount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

