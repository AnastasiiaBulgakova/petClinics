import { render, screen } from '@testing-library/react';

import Greeting from './Greeting.tsx';

jest.mock('../../theme/theme.ts', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

describe('Greeting component', () => {
  render(<Greeting />);

  it('renders the button with correct text', () => {
    expect(screen.getByRole('button', { name: /Записаться на приём/i })).toBeInTheDocument();
  });
});
