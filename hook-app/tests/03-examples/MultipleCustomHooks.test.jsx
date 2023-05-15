import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () =>{
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...')).toBeDefined();
        expect(screen.getByText('BreakingBad quotes')).toBeDefined();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(nextButton.disabled).toBeTruthy();

    });

    test('debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Yair', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Yair')).toBeTruthy();


        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Yair', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();


    });

})