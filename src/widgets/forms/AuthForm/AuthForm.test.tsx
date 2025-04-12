import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import AuthForm from './AuthForm';

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

describe('AuthForm Component', () => {
  test('renders the form title', () => {
    const mockOnFinish = jest.fn();
    render(
      <MemoryRouter>
        <AuthForm onFinish={mockOnFinish} />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/Log in to your Account/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders email input', () => {
    const mockOnFinish = jest.fn();
    render(
      <MemoryRouter>
        <AuthForm onFinish={mockOnFinish} />
      </MemoryRouter>
    );
    const emailInput = screen.getByLabelText(/Email Address/i);
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input', () => {
    const mockOnFinish = jest.fn();
    render(
      <MemoryRouter>
        <AuthForm onFinish={mockOnFinish} />
      </MemoryRouter>
    );
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders submit button', () => {
    const mockOnFinish = jest.fn();
    render(
      <MemoryRouter>
        <AuthForm onFinish={mockOnFinish} />
      </MemoryRouter>
    );
    const buttonElement = screen.getByRole('button', { name: /Log in/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
