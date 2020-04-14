import React, { useState } from 'react';

import sounds from '../../sounds';

import SoundButton from './components/SoundButton';
import Memoriam from './components/Memoriam';

function App() {
  return (
    <div className="app">
      <h1 className="heading">TourRadar Jukebox</h1>

      {sounds.map(({ message, files }) => (
        <>
          <Memoriam>{message}</Memoriam>

          <div className="buttons">
            {files.map((file) => (
              <SoundButton key={file.name} soundName={file.file}>
                {file.name}
              </SoundButton>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
