import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import RegForm from './RegForm';

jest.mock('../../../features/theme/theme.ts', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
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

describe('RegForm Component', () => {
  test('renders fullname input', () => {
    const mockOnFinish = jest.fn();
    render(
      <MemoryRouter>
        <RegForm onFinish={mockOnFinish} />
      </MemoryRouter>
    );

    const fullNameInput = screen.getByLabelText(/Full Name/i);
    expect(fullNameInput).toBeInTheDocument();
  });
});

test('renders email input', () => {
  const mockOnFinish = jest.fn();
  render(
    <MemoryRouter>
      <RegForm onFinish={mockOnFinish} />
    </MemoryRouter>
  );
  const emailInput = screen.getByLabelText(/Email Address/i);
  expect(emailInput).toBeInTheDocument();
});

test('renders submit button', () => {
  const mockOnFinish = jest.fn();
  render(
    <MemoryRouter>
      <RegForm onFinish={mockOnFinish} />
    </MemoryRouter>
  );
  const buttonElement = screen.getByRole('button', { name: /Get Started/i });
  expect(buttonElement).toBeInTheDocument();
});
