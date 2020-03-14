import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = (props) => {
  const {onWelcomeButtonClick} = props;

  return (
    <React.Fragment>
      <button className="welcome__button" onClick={onWelcomeButtonClick}>
        <span className="visually-hidden">Начать игру</span>
      </button>
    </React.Fragment>
  );
};

WelcomeScreen.propTypes = {
  onWelcomeButtonClick: PropTypes.func.isRequired,
};

export default WelcomeScreen;
