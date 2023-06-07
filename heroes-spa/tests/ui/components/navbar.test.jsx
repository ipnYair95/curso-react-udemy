import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));


describe('navbar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'juan'
        },
        logout: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('juan')).toBeTruthy();

    });

    test('debe llamar el logout y navigate', () => {

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith("/login", { "replace": true });

    });

});