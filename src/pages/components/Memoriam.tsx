import { FC } from 'react';

import styles from './memoriam.module.scss';

const Memoriam: FC<{ children: string }> = ({ children }) => {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default Memoriam;
