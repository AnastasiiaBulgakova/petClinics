import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button Component', () => {
  test('renders the button with children', () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders button with correct type attribute', () => {
    render(<Button type='submit'>Submit</Button>);

    const buttonElement = screen.getByText(/Submit/i);
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  test('renders button with default type "button"', () => {
    render(<Button>Default Button</Button>);

    const buttonElement = screen.getByText(/Default Button/i);
    expect(buttonElement).toHaveAttribute('type', 'button');
  });
});
