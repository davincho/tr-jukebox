import type { HeadersFunction } from 'remix';

import sounds from '../../sounds';
import JukeBox from '../components/JukeBox';
import SoundButton from '../components/SoundButton';

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': 's-maxage=1, stale-while-revalidate=59'
  };
};

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <JukeBox />

      <div className="md:absolute top-[162px] md:left-9 overflow-scroll">
        <h1 className="hidden md:block text-5xl mb-7 font-bold">
          TourRadar Jukebox
        </h1>
        <div className="grid md:w-[747px] grid-cols-1 md:grid-cols-3 gap-3 md:bg-transparent p-3 bg-teal-10">
          {sounds.map(group => {
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

export default Index;
