import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('LoginPage', () => {

    const user = {
        id: 1,
        name: 'Yair'
    };

    test('debe mostrar el componente sin el usuario', () => {


        render(
            <UserContext.Provider value={{ user: null }} >
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria lable

        expect(preTag.innerHTML).toBe('null');

    });

    test('debe de llamar el setUser al clic', () => {

        const spySetUser = jest.fn();

        render(
            <UserContext.Provider value={{ user: user, setUser: spySetUser }} >
                <LoginPage />
            </UserContext.Provider>
        );

        const btnElement = screen.getByRole('button');
        fireEvent.click(btnElement);

        expect(spySetUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Yair',
            email: 'correo@mail.com'
        });

    });

});