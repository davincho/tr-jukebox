import { FC, useState } from 'react';

import Sound from 'react-sound';

import { motion } from 'framer-motion';

import styles from './button.module.scss';

const SoundButton: FC<{
  soundName: string;
}> = ({ children, soundName }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <motion.button
        className={styles.btn}
        onClick={() => {
          setIsPlaying(true);
        }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
      <Sound
        url={soundName}
        onStop={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        onFinishedPlaying={() => setIsPlaying(false)}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
      />
    </>
  );
};

export default SoundButton;
