import { fireEvent, render, screen } from '@testing-library/react';

import AddButton from './AddButton';

const addPetsMock = jest.fn();

describe('Component AddButton', () => {
  it('check addButton', () => {
    render(<AddButton />);
    expect(screen.getByRole('button')).toHaveClass('button');
  });

  it('click addButton', () => {
    render(<AddButton onClick={addPetsMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(addPetsMock).toHaveBeenCalled();
  });
});
