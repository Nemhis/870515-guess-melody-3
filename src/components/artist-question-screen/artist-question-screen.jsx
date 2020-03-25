import React from 'react';
import PropTypes from 'prop-types';

const ArtistQuestionScreen = (props) => {
  const {question, onAnswer, renderPlayer} = props;
  const {answers, song} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className={`track`}>
          {renderPlayer(song.src, 0)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, index) => (
          <div key={index} className="artist">
            <input className="artist__input visually-hidden" type="radio"
              name="answer" value={`artist-${index}`} id={`artist-${index}`}
              onChange={(event) => {
                event.preventDefault();
                onAnswer(question, answer);
              }}
            />
            <label className="artist__name" htmlFor={`artist-${index}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
              {answer.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })),
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
