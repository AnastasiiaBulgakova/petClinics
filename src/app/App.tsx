import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../widgets/Header/Header.tsx';

import { ThemeSwitcher, ThemeProvider } from '@/features';
import Footer from '@/widgets/Footer/Footer.tsx';
import { baseUrl } from '@/shared/services/api/lib/consts.ts';

const App: FC = () => {
  console.log('BASE URL:', baseUrl);

  return (
    <ThemeProvider>
      <Header />
      <ThemeSwitcher />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
