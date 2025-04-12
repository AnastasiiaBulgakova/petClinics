import { FC, ReactNode, MouseEventHandler, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

import style from './AddButton.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: ReactNode;
  type?: 'reset' | 'submit' | 'button';
}

const AddButton: FC<ButtonProps> = props => {
  const { className = '', onClick = () => {}, type = 'button', children, ...restProps } = props;
  return (
    <button className={classnames(style.button, className)} onClick={onClick} type={type} {...restProps}>
      {children}
    </button>
  );
};

export default AddButton;
