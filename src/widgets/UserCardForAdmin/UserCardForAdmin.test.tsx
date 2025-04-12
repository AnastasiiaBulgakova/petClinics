import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import UserCardForAdmin from './UserCardForAdmin';

jest.mock('../../features/theme/theme.ts', () => ({
  useTheme: () => ({
    theme: 'light',
    switchTheme: jest.fn(),
    updateTheme: jest.fn(),
  }),
}));

describe('UserCardForAdmin Component', () => {
  it('renders without crashing', () => {
    render(<UserCardForAdmin />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('displays the user name', () => {
    render(<UserCardForAdmin />);
    const userName = screen.getByRole('heading', { level: 2 });
    expect(userName).toBeInTheDocument();
    expect(userName.textContent).toBeTruthy();
  });

  it('renders the profile image', () => {
    render(<UserCardForAdmin />);
    const image = screen.getByAltText('Profile picture');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  it('renders the notification status section', () => {
    render(<UserCardForAdmin />);
    expect(screen.getByText(/Статус уведомлений:/i)).toBeInTheDocument();

    const notificationContainer = screen.getByText(/Статус уведомлений:/i).closest('div');
    expect(notificationContainer).toBeInTheDocument();
    expect(notificationContainer).toHaveTextContent(/Discord/i);
    expect(notificationContainer).toHaveTextContent(/Email/i);
  });

  it('renders the user details', () => {
    render(<UserCardForAdmin />);
    const details = screen.getByRole('article').querySelector('.details');
    expect(details).toBeInTheDocument();
    expect(details?.textContent).toBeTruthy();
  });

  it('renders the Edit and View buttons', () => {
    render(<UserCardForAdmin />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('applies the correct theme class', () => {
    render(<UserCardForAdmin />);
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('data-theme', 'light');
  });
});