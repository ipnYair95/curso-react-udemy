const { render, screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require("../src/CounterApp");

describe('CounterApp ', () => {

    const value = 100;

    test('debe hacer match con snapshort', () => {

        const { container } = render(<CounterApp value={value} />);

        expect(screen.getByText(100)).toBeTruthy();
        expect(container).toMatchSnapshot();

    });

    test('debe de incrementar con el btn +1', () => {

        render(<CounterApp value={value} />);

        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();

    });

    test('debe de decrementar con el btn -1', () => {

        render(<CounterApp value={value} />);

        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();

    });

    test('debe de funcionar el btn reset', () => {

        render(<CounterApp value={value} />)

        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect(screen.getByText(value)).toBeTruthy();

    });


});