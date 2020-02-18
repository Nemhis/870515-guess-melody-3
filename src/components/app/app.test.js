import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const name = `Boss`;

describe(`<App>`, () => {
  it(`Render <App>`, () => {
    const tree = renderer
      .create(<App/>)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });

  it(`Render <App> with name`, () => {
    const tree = renderer
      .create(<App
        name={name}
      />)
      .toJSON(name);

    expect(tree).toMatchSnapshot();
  });
});
