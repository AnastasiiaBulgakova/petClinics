import { render, screen } from '@testing-library/react';

import WrapperSidebar from './WrapperSidebar';

describe('WrapperSidebar', () => {
  it('рендерит переданные children', () => {
    render(
      <WrapperSidebar>
        <p>Контент</p>
      </WrapperSidebar>
    );

    expect(screen.getByText(/Контент/i)).toBeInTheDocument();
  });

  it('добавляет переданный className', () => {
    const customClass = 'custom-sidebar';

    render(<WrapperSidebar className={customClass}>Контент</WrapperSidebar>);

    const asideElement = screen.getByRole('complementary');

    expect(asideElement).toHaveClass(customClass);
  });
});
