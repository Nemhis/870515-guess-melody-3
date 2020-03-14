import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

import {GameType} from '../../const';

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

  _getScreenByQuestion({type}) {
    let screen = null;

    switch (type) {
      case GameType.GENRE:
        screen = (<ArtistQuestionScreen />);
        break;
      case GameType.ARTIST:
        screen = (<ArtistQuestionScreen />);
        break;
    }

    return screen;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
  })),
};

export default App;
