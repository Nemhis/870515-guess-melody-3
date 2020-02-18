import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WelcomeScreen from '../app/app';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        name={`Boss`}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  );

  console.log(welcomeScreen.html());
  const welcomeButton = welcomeScreen.find(`button.welcome__button`);
  welcomeButton.props().onClick();

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});
