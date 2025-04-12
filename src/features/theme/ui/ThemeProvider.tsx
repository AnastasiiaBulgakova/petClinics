import { FC, ReactNode, useEffect, useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeType } from '@api/slice/ThemeSlice/ThemeSlice';

import { useTheme } from '../theme';
import { applyTheme } from '../lib/themeHandler';
import { getThemeTokens, getContainerStyle } from '../lib/themeStyles';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme, updateTheme } = useTheme();

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as ThemeType) || 'light';
    if (theme !== savedTheme) {
      updateTheme(savedTheme);
    }
    localStorage.setItem('theme', savedTheme);
    applyTheme(savedTheme);
  }, []);

  const themeTokens = useMemo(() => getThemeTokens(theme), [theme]);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      applyTheme(theme);
    }
  }, [theme]);

  return (
    <ConfigProvider theme={themeTokens}>
      <div style={getContainerStyle(theme)}>{children}</div>
    </ConfigProvider>
  );
};
