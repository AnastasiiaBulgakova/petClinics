import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import UserWidget from './UserWidget.tsx';

describe('UserWidget', () => {
  it('renders the user role correctly', () => {
    render(
      <UserWidget
        role='Client'
        avatarUrl='https://example.com/avatar.jpg'
        hasNotifications={false}
        onLogout={() => {}}
      />
    );
    expect(screen.getByText('Client')).toBeInTheDocument();
  });

  it('renders the avatar with the correct URL', () => {
    const avatarUrl = 'https://example.com/avatar.jpg';
    render(<UserWidget role='Client' avatarUrl={avatarUrl} hasNotifications={false} onLogout={() => {}} />);
    const avatar = screen.getByAltText('User Avatar') as HTMLImageElement;
    expect(avatar.src).toBe(avatarUrl);
  });

  it('displays notification badge when hasNotifications is true', () => {
    render(
      <UserWidget
        role='Client'
        avatarUrl='https://example.com/avatar.jpg'
        hasNotifications={true}
        onLogout={() => {}}
      />
    );
    expect(screen.getByTestId('notification-badge')).toBeInTheDocument();
  });

  it('does not display notification badge when hasNotifications is false', () => {
    render(
      <UserWidget
        role='Client'
        avatarUrl='https://example.com/avatar.jpg'
        hasNotifications={false}
        onLogout={() => {}}
      />
    );
    expect(screen.queryByTestId('notification-badge')).not.toBeInTheDocument();
  });
});
