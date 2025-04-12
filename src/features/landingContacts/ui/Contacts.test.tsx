import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Contacts from './Contacts';

jest.mock('../../theme/theme.ts', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

describe('Contacts Component', () => {
  test('renders Contacts component', () => {
    render(
      <MemoryRouter>
        <Contacts />
      </MemoryRouter>
    );

    expect(screen.getByText(/Услуги/i)).toBeInTheDocument();
    expect(screen.getByText(/Компания/i)).toBeInTheDocument();
    expect(screen.getByText(/Ответы на вопросы/i)).toBeInTheDocument();

    expect(screen.getByText(/Косметические операции/i)).toBeInTheDocument();
    expect(screen.getByText(/Акции/i)).toBeInTheDocument();
    expect(screen.getByText(/Статьи/i)).toBeInTheDocument();

    expect(screen.getByAltText(/Logo/i)).toBeInTheDocument();
  });

  test('renders social icons', () => {
    render(
      <MemoryRouter>
        <Contacts />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/vk/i)).toBeInTheDocument();
    expect(screen.getByAltText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByAltText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByAltText(/whatsapp/i)).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(
      <MemoryRouter>
        <Contacts />
      </MemoryRouter>
    );

    expect(screen.getByText(/Положение о политике персональных данных/i)).toBeInTheDocument();
  });
});
