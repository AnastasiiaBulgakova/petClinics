import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import SidebarAdmin from "./SidebarAdmin.tsx";

const renderWithRouter = (component: React.ReactNode) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    );
};

describe('SidebarAdmin', () => {
    beforeEach(() => {
        // Mock localStorage
        const mockLocalStorage = {
            getItem: jest.fn().mockReturnValue('ADMIN'),
            setItem: jest.fn(),
            clear: jest.fn()
        };
        Object.defineProperty(window, 'localStorage', {
            value: mockLocalStorage
        });
    });
    it('renders correctly', () => {
        renderWithRouter(<SidebarAdmin />);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('renders the correct number of menu items', () => {
        renderWithRouter(<SidebarAdmin />);
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems).toHaveLength(10); 
    });

    it('renders dashboard logo', () => {
        renderWithRouter(<SidebarAdmin />);
        const dashboardItem = screen.getByText('Dashboard');
        const logo = dashboardItem.parentElement?.querySelector('img');
        expect(logo).toBeInTheDocument();
    });

    it('renders each menu image', () => {
        renderWithRouter(<SidebarAdmin />);
        const menuImages = screen.getAllByRole('img');
        expect(menuImages).toHaveLength(10); // One image per menu item
    });
});