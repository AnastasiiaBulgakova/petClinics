import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import EditProfileForm from './EditProfileForm';

import { store } from '@/shared/services/store/store';

jest.mock('../../../features/theme/theme.ts', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('EditProfileForm Component', () => {
  test('renders correct field values with props', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfileForm
            profile={{
              lastName: 'Kartaviy',
              firstName: 'Kris',
              avatarUrl: '',
              birthDate: '27.01.2005',
              discordNotify: true,
              emailNotify: true,
              discordId: '1',
              telegramId: '1',
            }}
          />
        </MemoryRouter>
      </Provider>
    );
    const lastname = screen.getByDisplayValue(/Kartaviy/i);
    expect(lastname).toBeInTheDocument();
  });
});
