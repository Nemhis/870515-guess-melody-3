import React from 'react';
import renderer from 'react-test-renderer';

import App from './welcome-screen.jsx';

const name = `Boss`;

describe(`<Welcome-screen>`, () => {
  it(`Render <Welcome-screen>`, () => {
    const tree = renderer
      .create(<App/>)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });

  it(`Render <Welcome-screen> with name`, () => {
    const tree = renderer
      .create(<App
        name={name}
      />)
      .toJSON(name);

    expect(tree).toMatchSnapshot();
  });
});
