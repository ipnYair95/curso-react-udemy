import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {

    /*  test('debe hacer match con el snapshot', () => {
         const title = 'Titulo';
         const {container} = render( <FirstApp  title={ title } /> );
 
         expect(container).toMatchSnapshot();        
     }); */

    test('debe de mostrar el titulo en un h1', () => {

        const title = 'Titulo';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();
        /* const h1 =  container.querySelector('h1');
        expect( h1.innerHTML ).toContain(title); */
        expect(getByTestId('test-title').innerHTML).toContain(title)

    });

    test('debe mostrar el subtitulo enviado por props', () => {

        const title = 'Titulo';
        const subtitle = 'Soy un subtitulo'
        const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle} />);

        expect( getAllByText(subtitle).length ).toBe(1);

    });

});