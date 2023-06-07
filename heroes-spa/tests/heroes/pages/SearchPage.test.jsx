import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Search page', () => {

    beforeEach( () =>{
        jest.clearAllMocks();
    });

    test('debe de mostrarse correctamente', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar a batma y el input con el valor del query', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']} >
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');

        expect(input.value).toEqual('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain("/assets/heroes/dc-batman.jpg");

        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toEqual('none')

    });

    test('debe de mostrar un error si no se encuentra el heroe (sadfsad) ', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=sadfsad']} >
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger-not');
        expect(alert.style.display).toEqual('')


    });

    test('debe de llamar el navigate a la pantalla nueva', () => {

        render(
            <MemoryRouter initialEntries={['/search']} >
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } });
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockUseNavigate).toHaveBeenCalledWith("?q=superman");
    });



})