import React from "react";

import sounds from "../../sounds";

import JukeBox from "./components/JukeBox";
import SoundButton from "./components/SoundButton";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <JukeBox className="fixed top-5 right-0 w-7/12" />

      <div className="absolute top-[162px] left-9">
        <h1 className="text-5xl mb-7 font-bold">TourRadar Jukebox</h1>
        <div className="grid w-[747px] grid-cols-3 gap-3">
          {sounds.map((group) => {
            const label = group.message;

            return group.files.map(({ name, file }) => (
              <SoundButton
                label={label}
                key={name}
                soundName={file}
                image={group.image}
              >
                {name}
              </SoundButton>
            ));
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
