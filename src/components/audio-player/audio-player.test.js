import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player';

const song = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
};

it(`<AudioPlayer/> render correctly`, () => {
  const tree = renderer
    .create(<AudioPlayer src={song.src} isPlaying={true} />, {
      createNodeMock: () => ({}),
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
