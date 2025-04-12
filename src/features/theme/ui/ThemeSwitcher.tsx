import React from 'react';
import { Switch } from 'antd';
import classNames from 'classnames';

import { useTheme } from '../theme';
import styles from '../ThemeSwitcher.module.scss';

export const ThemeSwitcher: React.FC = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <Switch
      className={classNames(styles.switch, styles[`switch-${theme}`])}
      checked={theme === 'dark'}
      onChange={switchTheme}
      checkedChildren='Dark'
      unCheckedChildren='Light'
    />
  );
};
