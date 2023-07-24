import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import TopBar from './TopBar';

describe('TopBar Component', () => {
    test('renders the TopBar component', () => {
        const [fullSidebar, setFullSidebar] = useState(false)
        render(<TopBar fullSidebar={fullSidebar} setFullSidebar={setFullSidebar} />); 

        const topBarElement = screen.getByTestId('topBar');
        expect(topBarElement).toBeInTheDocument();
    });

    test('clicking the sidebar button toggles the fullSidebar state', () => {
        const setFullSidebarMock = jest.fn();

        render(<TopBar fullSidebar={false} setFullSidebar={setFullSidebarMock} />);

        const sidebarButton = screen.getByRole('button', { name: /sidebar button/i });

        fireEvent.click(sidebarButton);

        expect(setFullSidebarMock).toHaveBeenCalledWith(true);
    });

    test('displays the logo image', () => {
        render(<TopBar fullSidebar={false} setFullSidebar={() => { }} />);

        const logoImage = screen.getByAltText('Logo');
        expect(logoImage).toBeInTheDocument();
    });

    test('displays the user button and logout button', () => {
        render(<TopBar fullSidebar={false} setFullSidebar={() => { }} />);

        const userButton = screen.getByRole('button', { name: /user button/i });
        const logoutButton = screen.getByRole('button', { name: /logout button/i });

        expect(userButton).toBeInTheDocument();
        expect(logoutButton).toBeInTheDocument();
    });
});
