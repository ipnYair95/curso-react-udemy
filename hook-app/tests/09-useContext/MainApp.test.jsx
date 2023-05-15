import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('MainApp', () => {

    test('debe mostrar home page', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();

    });

    test('debe mostrar el login page', () => {

        render(
            <MemoryRouter initialEntries={['/login']} >
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();

    });

});