import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'light' | 'dark';

const initialState: ThemeType = (localStorage.getItem('theme') as ThemeType) || 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(_, action: PayloadAction<ThemeType>) {
      localStorage.setItem('theme', action.payload);
      return action.payload;
    },
    toggleTheme(_state) {
      const newTheme = _state === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
