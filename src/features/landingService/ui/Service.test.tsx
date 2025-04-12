import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Service from './Service.tsx';

jest.mock('../../theme/theme.ts', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

describe('Service component', () => {
  it('Service render', () => {
    render(<Service />);
  });

  it('title text check', () => {
    render(<Service />);

    const titleElement = screen.getByText(/Услуги нашей клиники/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('alt text check', () => {
    render(<Service />);

    const altTextImage = screen.getByAltText('кот на приёме у ветеринара');
    expect(altTextImage).toBeInTheDocument();
    screen.debug();
  });

  it('dinamic styles works', () => {
    render(<Service />);

    expect(screen.getByRole('button')).toHaveClass('service__button');
  });

  it('button click', () => {
    render(<Service />);

    userEvent.click(screen.getByRole('button'));
  });
});
