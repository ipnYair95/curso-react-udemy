import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";


describe('AddCategoty', () => {

    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'saitama' } });

        expect(input.value).toBe('saitama');

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        expect( input.value ).toEqual('');
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue.trim() );
        expect( onNewCategory ).toHaveBeenCalledTimes(1);

    });

    test('no debe de llamar onNewCategory por input vacio', () => {
        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
                
        fireEvent.submit(form);
        
        expect( input.value ).toEqual('');
        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    });

})