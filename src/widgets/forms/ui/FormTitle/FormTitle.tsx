import React from 'react';

import styles from './FormTitle.module.scss';

import { useTheme } from '@/features';

interface FormTitleProps {
  mainTitle: string;
  secondaryTitle: string;
}

const FormTitle: React.FC<FormTitleProps> = ({ mainTitle, secondaryTitle }) => {
  const { theme } = useTheme();

  return (
    <div>
      <h2 className={`${styles.title} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>{mainTitle}</h2>
      <p className={`${styles.secondaryTitle} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
        {secondaryTitle}
      </p>
    </div>
  );
};

export default FormTitle;
