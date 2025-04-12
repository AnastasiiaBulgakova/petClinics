import { useDispatch, useSelector } from 'react-redux';
import { setTheme, toggleTheme, ThemeType } from '@api/slice/ThemeSlice/ThemeSlice';

import { RootState } from '@/shared/services';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeSlice);

  const switchTheme = () => dispatch(toggleTheme());

  const updateTheme = (newTheme: ThemeType) => dispatch(setTheme(newTheme));

  return { theme, switchTheme, updateTheme };
};
