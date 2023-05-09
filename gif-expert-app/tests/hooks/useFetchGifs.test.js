import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('Saitama'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe de regresar un arreglo de imagenes e isLoading false', async () => {

        const { result } = renderHook(() => useFetchGifs('Saitama'));

        await waitFor( () => expect( result.current.images.length ).toBeGreaterThan(0) );

        const { images, isLoading } = result.current;        

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });



});