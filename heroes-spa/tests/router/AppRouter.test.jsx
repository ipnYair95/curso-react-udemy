import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('AppRouter', () => {

    test('debe de mostrar el login sino esta auth', () => {

        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']} >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length ).toBeGreaterThan(0);

    });

    test('debe de mostrar el componente de marvel con auth', () => {
        
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'doe'
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']} >
                <AuthContext.Provider value={contextValue}>
                <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThan(0);

    });

});