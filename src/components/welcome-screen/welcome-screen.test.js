import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen.jsx';

const name = `Boss`;

describe(`<WelcomeScreen>`, () => {
  it(`Render <WelcomeScreen>`, () => {
    const tree = renderer
      .create(<WelcomeScreen onWelcomeButtonClick={() => {}} />)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });

  it(`Render <WelcomeScreen> with name`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        name={name}
        onWelcomeButtonClick={() => {}}
      />)
      .toJSON(name);

    expect(tree).toMatchSnapshot();
  });
});
