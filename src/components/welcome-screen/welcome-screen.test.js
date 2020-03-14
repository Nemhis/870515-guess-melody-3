import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen.jsx';

describe(`<WelcomeScreen>`, () => {
  it(`Render <WelcomeScreen>`, () => {
    const tree = renderer
      .create(<WelcomeScreen onWelcomeButtonClick={() => {}} />)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
