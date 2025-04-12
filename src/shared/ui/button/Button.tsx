import { FC, ReactNode, MouseEventHandler, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: ReactNode;
  type?: 'reset' | 'submit' | 'button';
}

const Button: FC<ButtonProps> = props => {
  const { type = 'button', onClick = () => {}, className = '', children, ...restProps } = props;
  return (
    <button className={classNames(styles.Button, className)} onClick={onClick} type={type} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
