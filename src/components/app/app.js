import React from 'react';
import PropTypes from "prop-types";

import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const {name} = props;

  return <React.Fragment>
    <WelcomeScreen name={name} />
  </React.Fragment>;
};

App.propTypes = {
  name: PropTypes.number.isRequired,
};

export default App;
