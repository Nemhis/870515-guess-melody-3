import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const song = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
};

const SELECTOR = {
  pause: `track__button--pause`,
  play: `track__button--play`,
};

it(`Click should update button style`, () => {
  const audioPlayer = mount(
      <AudioPlayer
        src={song.src}
        isPlaying={false}
      />
  );

  audioPlayer.instance()._audioRef.current = {
    play() {},
    pause() {},
  };

  let button = audioPlayer.find(`.track__button`).at(0);

  expect(button.hasClass(SELECTOR.play)).toBe(true);
  button.props().onClick();
  expect(button.render().hasClass(SELECTOR.pause)).toBe(true);
});
