import less from 'less';
import { message } from 'antd';

import { lightThemeVars, darkThemeVars } from './themeVariables';

import { ThemeType } from '@/shared/services/slice/ThemeSlice/ThemeSlice';

export const applyTheme = async (theme: ThemeType) => {
  const themeVars = theme === 'light' ? lightThemeVars : darkThemeVars;

  try {
    await less.modifyVars(themeVars);
  } catch (error) {
    message.error('Failed to switch theme');
  }
};
