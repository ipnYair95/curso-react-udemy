import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')


describe('GifGrid', () => {

    const category = 'One punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByText('Cargando...')).toBeTruthy();
        expect(screen.getAllByText(category)).toBeTruthy()

    });

    test('debe mostrar items cuando se cargan las imagenes useFecthGifs', () => {

        const gifs = [
            { id: 'ABC', title: 'Saitama', url: 'url' },
            { id: '123', title: 'Goku', url: 'url2' }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect( screen.getAllByRole('img').length ).toBe(2);


    });

});