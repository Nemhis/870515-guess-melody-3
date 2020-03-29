import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';

import withActivePlayer from '../../hocs/with-audio-player';
import {GameType} from '../../const';

const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {
    const {questions} = this.props;
    const {step} = this.state;

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen onWelcomeButtonClick={() => {
          this.setState({step: 0});
        }}/>
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
    const toNextStep = () => {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }));
    };

    switch (question.type) {
      case GameType.GENRE:
        screen = <GameScreen type={question.type}>
          <GenreQuestionScreenWrapped question={question} onAnswer={toNextStep}/>
        </GameScreen>;
        break;
      case GameType.ARTIST:
        screen = <GameScreen type={question.type}>
          <ArtistQuestionScreenWrapped question={question} onAnswer={toNextStep}/>
        </GameScreen>;
        break;
    }

    return screen;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-genre">
            <GameScreen type={questions[0].type}>
              <GenreQuestionScreenWrapped question={questions[0]} onAnswer={() => {}}/>
            </GameScreen>
          </Route>
          <Route exact path="/dev-artist">
            <GameScreen type={questions[1].type}>
              <ArtistQuestionScreenWrapped question={questions[1]} onAnswer={() => {}}/>
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
};

export default App;
