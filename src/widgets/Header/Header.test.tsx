import { render, screen, waitFor, act, fireEvent } from '@test/test-utils';

import Header from './Header';

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

describe('Header Component', () => {
  it('should render the logo', async () => {
    render(<Header />);
    await waitFor(() => expect(screen.getByAltText('logo')).toBeInTheDocument());
  });

  it('should render all menu links', async () => {
    render(<Header />);
    const links = [
      'Список докторов',
      'Список процедур',
      'О чем-нибудь',
      'Список сосисок',
      'Контакты',
      'О нас',
      'Форум',
    ];
    await waitFor(() => {
      links.forEach(linkText => {
        expect(screen.getByText(linkText)).toBeInTheDocument();
      });
    });
  });

  it('should render Sign In and Register buttons', async () => {
    render(<Header />);
    await waitFor(() => {
      expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
      expect(screen.getByText(/Register/i)).toBeInTheDocument();
    });
  });
});

describe('Mobile menu tests', () => {
  beforeEach(() => {
    Object.defineProperty(global, 'innerWidth', {
      value: 360,
      writable: true,
    });
    global.dispatchEvent(new Event('resize'));
  });

  it('renders burger menu button on mobile', async () => {
    render(<Header />);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    });
  });

  it('opens and closes the mobile menu when burger button is clicked', async () => {
    render(<Header />);

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    });
    const mobileMenu = screen.getByText('Меню');

    act(() => {
      fireEvent.click(screen.getByText(/назад/i));
    });

    await waitFor(() => {
      expect(mobileMenu).toBeInTheDocument();
      expect(mobileMenu).not.toBeVisible();
    });
  });

  it('renders Sign In button and avatar in the mobile menu', async () => {
    render(<Header />);

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    });

    await waitFor(() => {
      expect(screen.getByTestId('mobile-sign-in')).toBeInTheDocument();
      expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
    });
  });
});
