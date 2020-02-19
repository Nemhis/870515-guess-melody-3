import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = (props) => {
  const {name = `Stranger`, onWelcomeButtonClick} = props;

  return (
    <React.Fragment>
      <p>Hello, {name}.</p>
      <button className="welcome__button" onClick={onWelcomeButtonClick}>
        <span className="visually-hidden">Начать игру</span>
      </button>
    </React.Fragment>
  );
};

WelcomeScreen.propTypes = {
  name: PropTypes.string,
  onWelcomeButtonClick: PropTypes.func.isRequired,
};

export default WelcomeScreen;
