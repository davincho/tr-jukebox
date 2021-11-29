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
        className={`relative bg-white-100 shadow-grey-8 rounded-3xl py-1 px-4 h-[48px] transition transform ease-out active:scale-110`}
        onClick={() => {
          setIsPlaying(true);
        }}
      >
        <div
          className={`text-2xl absolute top-2 left-3 ${
            isPlaying ? 'animate-spin' : 'hidden'
          }`}
        >
          💿
        </div>
        <div className="uppercase text-xs h-[15px]">
          {resolvedImg ? (
            <img className="inline-block h-full" src={resolvedImg} />
          ) : null}
          {label}
        </div>
        <div className="font-bold truncate">{children}</div>
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
