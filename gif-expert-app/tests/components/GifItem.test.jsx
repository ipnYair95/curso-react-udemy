import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem', () => {

    const props = {
        title: 'title',
        url: 'https://one-punch.com/saitama.jpg'
    };

    test('should snapshot', () => {

        const { container } = render(<GifItem  {...props} />);

        expect(container).toMatchSnapshot();

    });

    test('debe mostrar la imagen con el URl y el ALT indicado', () => {

        render(<GifItem title={props.title} url={props.url} />);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(props.url);
        expect(alt).toBe(props.title);

    });

    test('debe mostrar el titulo en el componente', () => {

        render(<GifItem title={props.title} url={props.url} />);       

        expect( screen.getByText( props.title ).innerHTML ).toContain(props.title); 

    });



});