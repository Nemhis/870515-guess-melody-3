import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false]
    };
  }

  _renderAnswer({src}, index) {
    const {answers} = this.state;

    return (
      <div key={`${index}-${src}`} className="track">
        <button className="track__button track__button--play" type="button"/>
        <div className="track__status">
          <audio src={src}/>
        </div>
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer"
            value={`answer-${index}`} id={`answer-${index}`} checked={answers[index]}
            onChange={(event) => {
              const value = event.target.checked;

              this.setState({
                answers: [...answers.slice(0, index), value, ...answers.slice(index + 1)],
              });
            }}
          />

          <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
        </div>
      </div>
    );
  }

  render() {
    const {onAnswer, question} = this.props;
    const {genre, answers} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={(event) => {
            event.preventDefault();
            onAnswer(question, this.state.answers);
          }}>
            {answers.map((answer, index) => this._renderAnswer(answer, index))}

            <button className="game__submit button" type="submit" onClick={onAnswer}>Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })),
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
