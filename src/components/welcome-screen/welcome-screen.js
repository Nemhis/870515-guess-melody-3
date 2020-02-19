import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = (props) => {
  const {name = `Stranger`} = props;

  return <React.Fragment>
    <p>Hello, {name}.</p>
  </React.Fragment>;
};

WelcomeScreen.propTypes = {
  name: PropTypes.string.isRequired,
};

export default WelcomeScreen;
