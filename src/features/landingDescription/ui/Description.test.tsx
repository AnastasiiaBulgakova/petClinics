import { render, screen } from '@testing-library/react';

import Description from './Description';

jest.mock('../../theme/theme.ts', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

test('Description component', () => {
  render(<Description />);
  const titles = screen.queryAllByText(/Ветеринарная клиника Слон в Краснодаре/i);
  expect(titles.length).toBeGreaterThan(0);
  titles.forEach(title => {
    expect(title).toBeInTheDocument();
  });
});
