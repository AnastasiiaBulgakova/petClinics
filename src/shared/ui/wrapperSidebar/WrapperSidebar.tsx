import { FC, ReactNode } from 'react';
import classnames from 'classnames';

import style from './WrapperSidebar.module.scss';

interface WrapperProps {
  className?: string;
  children?: ReactNode;
}

const WrapperSidebar: FC<WrapperProps> = ({ children, className }) => {
  return <aside className={classnames(style.wrapper, className)}>{children}</aside>;
};

export default WrapperSidebar;
