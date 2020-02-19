import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {name} = props;

  return <WelcomeScreen name={name} onWelcomeButtonClick={() => {}}/>;
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
