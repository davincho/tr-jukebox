import { FC, useState } from 'react';

import Sound from 'react-sound';

import niki from './niki.png';

const IMAGE_MAP = {
  niki
};

const SoundButton: FC<{
  soundName: string;
  label: string;
  image?: 'niki';
}> = ({ children, soundName, label, image }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setIsLoading] = useState(false);

  const resolvedImg = image ? IMAGE_MAP[image] : undefined;

  return (
    <>
      <button
        className={`bg-white-100 shadow-grey-8 rounded-3xl p-1 h-[48px] ${
          isPlaying ? 'animate-spin' : ''
        }`}
        onClick={() => {
          setIsPlaying(true);
        }}
      >
        <div className="uppercase text-xs h-[15px]">
          {resolvedImg ? (
            <img className="inline-block h-full" src={resolvedImg} />
          ) : null}
          {label}
        </div>
        <div>{children}</div>
      </button>
      <Sound
        url={soundName}
        onLoading={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
        onStop={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        onFinishedPlaying={() => {
          setIsPlaying(false);
          setIsLoading(false);
        }}
        playStatus={isPlaying ? 'PLAYING' : 'STOPPED'}
      />
    </>
  );
};

export default SoundButton;
