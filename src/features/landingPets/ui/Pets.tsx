import { motion } from 'framer-motion';

import {
  petsblockCat,
  petsblockBird,
  petsblockBunny,
  petsblockDog,
  petsblockHam,
  petsblockHor,
  petsblockRepti,
} from '../../../shared/assets/index';

import styles from './Pets.module.scss';

import { pets, petsBlockCallDoc, petsBlockWorkwAllTypes } from '@/shared/services/api/lib/consts';
import { useTheme } from '@/features';

const Pets = () => {
  const { theme } = useTheme();
  const imgs = [petsblockCat, petsblockDog, petsblockBird, petsblockHam, petsblockRepti, petsblockBunny, petsblockHor];
  const items = imgs.map((img, index) => {
    return (
      <motion.div
        initial={{ y: 100, scale: 1.05 }}
        whileInView={{ y: 0, scale: 1 }}
        transition={{ duration: `1.${index}` }}
        key={index}
        whileHover={{
          scale: 1.07,
          transition: {
            duration: 0.3,
          },
          boxShadow: '0 0 30px 7px rgba(3, 3, 3, 0.2)',
        }}
        className={`${styles.flexbox__item} ${styles.item} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
        <div className={styles.item__order}>0{index + 1}</div>
        <span className={styles.item__title}>{pets[index]}</span>
        <img className={styles.item__img} src={img} alt={`Pet ${index + 1}`} />
      </motion.div>
    );
  });
  return (
    <div className={styles.petsBlock}>
      <div className={styles.content}>
        <div className={`${styles.petsBlock__title} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
          {petsBlockWorkwAllTypes}
        </div>
        <div className={`${styles.petsBlock__flexbox} ${styles.flexbox}`}>
          {items}
          <motion.div
            className={`${styles.flexbox__item} ${styles.item}`}
            initial={{ y: 100, scale: 1.05 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ duration: 1.7 }}
            whileHover={{
              scale: 1.07,
              transition: {
                duration: 0.3,
              },
              boxShadow: '0 0 30px 7px rgba(3, 3, 3, 0.2)',
            }}>
            <a>{petsBlockCallDoc}</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pets;
