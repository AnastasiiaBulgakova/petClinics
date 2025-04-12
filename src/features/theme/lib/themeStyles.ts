import { ThemeConfig } from 'antd/es/config-provider/context';
import { CSSProperties } from 'react';

import { darkThemeVars, lightThemeVars } from './themeVariables';

import { ThemeType } from '@/shared/services/slice/ThemeSlice/ThemeSlice';

export const getThemeTokens = (theme: ThemeType): ThemeConfig => ({
  token: {
    colorPrimary: theme === 'dark' ? darkThemeVars['@primary-color'] : lightThemeVars['@primary-color'],
    colorText: theme === 'dark' ? darkThemeVars['@text-color'] : lightThemeVars['@text-color'],
  },
});

export const getContainerStyle = (theme: ThemeType): CSSProperties => ({
  background: theme === 'dark' ? darkThemeVars['@body-background'] : lightThemeVars['@body-background'],
  color: theme === 'dark' ? darkThemeVars['@text-color'] : lightThemeVars['@text-color'],
});
