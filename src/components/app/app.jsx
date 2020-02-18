import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {name} = props;

  return <React.Fragment>
    <WelcomeScreen name={name} onWelcomeButtonClick={() => {}}/>
  </React.Fragment>;
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
