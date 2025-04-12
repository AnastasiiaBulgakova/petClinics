import { Button, Typography } from 'antd';
import { greeting } from '@shared/assets';

import styles from './Greeting.module.scss';

import { useTheme } from '@/features';

const { Title } = Typography;

const Greeting = () => {
  const { theme } = useTheme();

  const handleButtonClick = () => {
    console.log('Кнопка "Записаться на приём" была нажата!');
  };

  return (
    <div className={styles.greetingContainer}>
      <div className={styles.textContainer}>
        <Title level={1} className={`${styles.heading} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
          Мы заботимся о здоровье
          <p className={`${styles.petsHealth} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
            ваших питомцев
          </p>
        </Title>
        <Button type='primary' className={styles.button} onClick={handleButtonClick}>
          Записаться на приём
        </Button>
      </div>

      <div className={styles.imageContainer}>
        <img src={greeting} alt='Pet Health' className={styles.image} />
      </div>
    </div>
  );
};

export default Greeting;
