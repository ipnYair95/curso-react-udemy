import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Yair',
        email: 'correo@mail.com'
    };

    test('debe de regresar la información por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });

    });

    test('debe de cambiar el nombre del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const event = {
            target: {
                name: 'name',
                value: 'Juan'
            }
        };

        const { onInputChange } = result.current;

        act(() => {
            onInputChange(event);
        });

        expect(result.current.name).toEqual(event.target.value);
        expect(result.current.formState.name).toEqual(event.target.value);

    });

    test('debe de hacer el reset', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const event = {
            target: {
                name: 'name',
                value: 'Juan'
            }
        };

        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange(event);
            onResetForm();
        });

        expect(result.current.name).toEqual( initialForm.name );
        expect(result.current.formState.name).toEqual( initialForm.name );

    });

});