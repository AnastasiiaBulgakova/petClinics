import React, { HTMLAttributes } from 'react';

import styles from './FormWrapper.module.scss';

import { logo } from '@/shared/assets';

interface FormWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'auth' | 'reg';
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, variant = 'auth', ...rest }) => {
  const wrapperClass = variant === 'reg' ? styles.regWrapper : styles.authWrapper;
  return (
    <div className={`${wrapperClass}`} {...rest}>
      <img src={logo} alt='Logo' className={styles.logo} />
      <div>{children}</div>
    </div>
  );
};

export default FormWrapper;
