import { FC, useState } from 'react';

import Sound from 'react-sound';

import { motion } from 'framer-motion';

import styles from './button.module.scss';

const combine = (input) =>
  Object.keys(input)
    .reduce((acc, key) => {
      if (input[key]) {
        acc.push(key);
      }
      return acc;
    }, [])
    .join(' ');

const SoundButton: FC<{
  soundName: string;
}> = ({ children, soundName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <motion.div
        className={combine({
          [styles.btn]: true,
          [styles.btn__playing]: isPlaying,
        })}
        onClick={() => {
          setIsPlaying(true);
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={styles.content}>{children}</div>
      </motion.div>
      <Sound
        url={soundName}
        onLoading={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
        onStop={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        onFinishedPlaying={() => setIsPlaying(false)}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
      />
    </>
  );
};

export default SoundButton;
