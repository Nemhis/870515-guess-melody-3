import React from "react";

const WelcomeScreen = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name = `Stranger`} = props;

  return <React.Fragment>
    <p>Hello, {name}.</p>
  </React.Fragment>;
};

export default WelcomeScreen;
