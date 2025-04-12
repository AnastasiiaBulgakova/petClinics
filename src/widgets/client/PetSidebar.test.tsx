import { render, screen } from '@testing-library/react';
import { Collapse } from 'antd';

import PetSidebar from './PetSidebar';

const mockItems = [
  {
    key: '1',
    label: 'Собака',
    children: <p>Информация о собаке</p>,
  },
  {
    key: '2',
    label: 'Кошка',
    children: <p>Информация о кошке</p>,
  },
];

describe('Component PetSidebar', () => {
  it('render PetSidebar', () => {
    render(<PetSidebar />);
    expect(screen.getByText(/Ваши питомцы/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/аватар/i)).not.toHaveLength(0);
    screen.debug();
  });

  it('render item Collaps', () => {
    render(<Collapse items={mockItems} />);
    expect(screen.getByText(/Собака/i)).toBeInTheDocument();
    expect(screen.getByText(/Кошка/i)).toBeInTheDocument();
  });
});
